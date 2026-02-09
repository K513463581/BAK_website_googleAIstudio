import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, Database, Server } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ThemeExportPage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // --- SQL Setup ---
  const sqlContent = `-- Run this SQL query in your PHPMyAdmin to set up the database table

CREATE TABLE IF NOT EXISTS \`users\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(100) NOT NULL,
  \`email\` varchar(100) NOT NULL,
  \`bar_registration_number\` varchar(50) NOT NULL,
  \`password\` varchar(255) NOT NULL,
  \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`email\` (\`email\`),
  UNIQUE KEY \`bar_registration_number\` (\`bar_registration_number\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

  // --- PHP DB Connection ---
  const dbConnectContent = `<?php
// db_connect.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost"; // Usually localhost for shared hosting
$username = "root"; // CHANGE THIS to your database username
$password = ""; // CHANGE THIS to your database password
$dbname = "u471488886_BAK_base";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}
?>`;

  // --- PHP Register ---
  const registerContent = `<?php
// register.php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->name) && isset($data->email) && isset($data->password) && isset($data->bar_id)) {
    $name = $conn->real_escape_string($data->name);
    $email = $conn->real_escape_string($data->email);
    $bar_id = $conn->real_escape_string($data->bar_id);
    $password = password_hash($data->password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, email, bar_registration_number, password) VALUES ('$name', '$email', '$bar_id', '$password')";

    if ($conn->query($sql) === TRUE) {
        $last_id = $conn->insert_id;
        echo json_encode([
            "message" => "Registration successful",
            "user" => [
                "id" => $last_id,
                "name" => $name,
                "email" => $email,
                "bar_registration_number" => $bar_id
            ]
        ]);
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data"]);
}

$conn->close();
?>`;

  // --- PHP Login ---
  const loginContent = `<?php
// login.php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->password)) {
    $email = $conn->real_escape_string($data->email);
    $password = $data->password;

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password correct
            echo json_encode([
                "message" => "Login successful",
                "user" => [
                    "id" => $row['id'],
                    "name" => $row['name'],
                    "email" => $row['email'],
                    "bar_registration_number" => $row['bar_registration_number']
                ]
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["message" => "Invalid password"]);
        }
    } else {
        http_response_code(404);
        echo json_encode(["message" => "User not found"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data"]);
}

$conn->close();
?>`;

  const CodeBlock = ({ title, content, id }: { title: string, content: string, id: string }) => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800 flex items-center">
           <FileCode size={18} className="mr-2 text-navy-900"/> {title}
        </h3>
        <div className="flex space-x-2">
            <button 
                onClick={() => downloadFile(title, content)}
                className="text-sm flex items-center px-3 py-1 bg-gray-100 hover:bg-gold-500 hover:text-white rounded transition text-gray-700"
                title="Download this file"
            >
                <Download size={14} className="mr-1"/> Download
            </button>
            <button 
                onClick={() => copyToClipboard(content, id)}
                className="text-sm flex items-center px-3 py-1 bg-navy-50 hover:bg-navy-900 hover:text-white rounded transition text-navy-900"
            >
                {copied === id ? <Check size={14} className="mr-1"/> : <Copy size={14} className="mr-1"/>}
                {copied === id ? 'Copied' : 'Copy'}
            </button>
        </div>
      </div>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-xs font-mono max-h-64 scrollbar-hide">
        {content}
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-navy-900 py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">Developer Tools</h1>
        <p className="text-slate-300 mt-2">Resources to deploy and connect your application</p>
      </div>

      <Breadcrumbs />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-500">
          
          {/* Instructions Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
             <div className="flex items-start mb-4">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-800 mr-3 mt-1">
                    <Database size={24} />
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-blue-900">Database Connection Setup</h2>
                    <p className="text-blue-800 mt-1">
                        To connect this site to your MySQL database <strong>u471488886_BAK_base</strong>, follow these steps:
                    </p>
                 </div>
             </div>
             <ol className="list-decimal list-inside space-y-2 text-sm text-blue-900 ml-2">
                 <li>Download the <strong>SQL Setup</strong> file below and run it in your database (via PHPMyAdmin) to create the users table.</li>
                 <li>Download the <strong>PHP API Files</strong> (db_connect, login, register).</li>
                 <li>Edit <strong>db_connect.php</strong> and add your real Database Username and Password.</li>
                 <li>Upload a folder named <strong>api</strong> to the root of your website and put the PHP files inside it.</li>
             </ol>
          </div>

          <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
            <Server size={24} className="mr-2 text-gold-500"/> Backend API Files
          </h2>

          <CodeBlock title="table_setup.sql" content={sqlContent} id="sql" />
          <CodeBlock title="db_connect.php" content={dbConnectContent} id="db_connect" />
          <CodeBlock title="login.php" content={loginContent} id="login" />
          <CodeBlock title="register.php" content={registerContent} id="register" />
          
        </div>
      </div>
    </div>
  );
};

export default ThemeExportPage;