import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ThemeExportPage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const cssContent = `/*
Theme Name: Bar Association Karimnagar
Theme URI: https://barassociationkarimnagar.com
Author: Web Developer
Description: A modern, responsive WordPress theme for Legal Associations.
Version: 1.0
*/

:root {
  --navy-800: #1e3a8a;
  --navy-900: #172554;
  --gold-500: #d97706;
  --gold-600: #b45309;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
/* Tailwind utilities would be included or enqueued via CDN in functions.php */
`;

  const functionsContent = `<?php
function bak_theme_scripts() {
    // Enqueue Tailwind CSS (or compile it locally)
    wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com', array(), '3.0', false);
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap', false);
    
    // Main Stylesheet
    wp_enqueue_style('bak-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'bak_theme_scripts');

function bak_register_menus() {
  register_nav_menus(
    array(
      'primary-menu' => __( 'Primary Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'bak_register_menus' );

// Register Sidebar
function bak_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Main Sidebar', 'bak' ),
        'id'            => 'sidebar-1',
        'before_widget' => '<div class="widget bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="font-bold text-navy-900 border-l-4 border-gold-500 pl-3 mb-4">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'bak_widgets_init' );
?>`;

  const headerContent = `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <!-- Navigation Layout Here -->
     <?php
        wp_nav_menu( array(
            'theme_location' => 'primary-menu',
            'menu_class'     => 'hidden md:flex items-center space-x-6',
        ) );
     ?>
  </div>
</nav>`;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-navy-900 py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">Download WordPress Theme</h1>
        <p className="text-slate-300 mt-2">Convert this design into a functional WordPress site</p>
      </div>

      <Breadcrumbs />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-500">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-full text-navy-900">
              <Download size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Theme Files</h2>
              <p className="text-gray-600">
                To use this design in WordPress, create a new folder named <code>bak-theme</code> in your <code>wp-content/themes/</code> directory. Create the files below and paste the code.
              </p>
            </div>
          </div>

          {/* Style.css */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">1. style.css</h3>
              <button 
                onClick={() => copyToClipboard(cssContent, 'css')}
                className="text-sm flex items-center text-navy-900 hover:text-gold-600 font-medium"
              >
                {copied === 'css' ? <Check size={16} className="mr-1 text-green-600"/> : <Copy size={16} className="mr-1"/>}
                {copied === 'css' ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
              {cssContent}
            </pre>
          </div>

          {/* functions.php */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">2. functions.php</h3>
              <button 
                onClick={() => copyToClipboard(functionsContent, 'php')}
                className="text-sm flex items-center text-navy-900 hover:text-gold-600 font-medium"
              >
                 {copied === 'php' ? <Check size={16} className="mr-1 text-green-600"/> : <Copy size={16} className="mr-1"/>}
                 {copied === 'php' ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
              {functionsContent}
            </pre>
          </div>

           {/* header.php */}
           <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">3. header.php</h3>
              <button 
                onClick={() => copyToClipboard(headerContent, 'header')}
                className="text-sm flex items-center text-navy-900 hover:text-gold-600 font-medium"
              >
                 {copied === 'header' ? <Check size={16} className="mr-1 text-green-600"/> : <Copy size={16} className="mr-1"/>}
                 {copied === 'header' ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
              {headerContent}
            </pre>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
             <button className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-gold-600 transition">
               Download All as ZIP (Simulated)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeExportPage;