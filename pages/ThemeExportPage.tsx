import React, { useState } from 'react';
import { Copy, Check, Download, FileCode } from 'lucide-react';
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

  const cssContent = `/*
Theme Name: Bar Association Karimnagar
Theme URI: https://barassociationkarimnagar.com
Author: Web Developer
Description: A modern, responsive WordPress theme for Legal Associations.
Version: 1.1
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

/* Navigation Menu Styling */
.menu-primary-menu-container ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.menu-item a {
    color: #374151; /* gray-700 */
    font-weight: 500;
    font-size: 0.875rem; /* text-sm */
    text-transform: uppercase;
    letter-spacing: 0.025em; /* tracking-wide */
    padding: 0.5rem 0.75rem;
    transition: color 200ms;
    text-decoration: none;
}

.menu-item a:hover {
    color: #172554; /* navy-900 */
}

.current-menu-item a {
    color: #d97706; /* gold-500 */
    font-weight: 700;
}
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

// Add support for post thumbnails
add_theme_support( 'post-thumbnails' );
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
     <div class="flex justify-between h-24 items-center">
         <a href="<?php echo home_url(); ?>" class="flex items-center space-x-4 group">
            <div class="flex flex-col">
              <span class="font-serif font-bold text-xl md:text-2xl text-[#172554] leading-tight">BAR ASSOCIATION</span>
              <span class="font-sans text-xs md:text-sm text-[#b45309] tracking-[0.2em] font-bold uppercase">KARIMNAGAR</span>
            </div>
         </a>
         
         <!-- Desktop Menu -->
         <div class="hidden md:block">
             <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary-menu',
                    'container_class' => 'menu-primary-menu-container',
                    'fallback_cb' => false
                ) );
             ?>
         </div>
         
         <!-- Mobile Menu Button (Simple version) -->
         <button class="md:hidden text-[#172554] p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         </button>
     </div>
  </div>
  <!-- Simple Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 p-4">
     <?php
        wp_nav_menu( array(
            'theme_location' => 'primary-menu',
            'container' => false,
            'menu_class' => 'space-y-2 block'
        ) );
     ?>
  </div>
</nav>`;

const frontPageContent = `<?php get_header(); ?>

<div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="relative h-[600px] flex items-center justify-center bg-[#172554] overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#172554] via-[#172554]/80 to-transparent z-10"></div>
        
        <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <span class="inline-block py-1 px-3 rounded-full bg-[#d97706]/20 border border-[#d97706] text-[#d97706] text-sm font-semibold tracking-wider mb-6">ESTABLISHED 1950</span>
            <h1 class="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Upholding Justice,<br/> <span class="text-[#d97706]">Defending Rights</span>
            </h1>
            <p class="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                The official digital portal of the Bar Association of Karimnagar. Serving the legal community with integrity and excellence.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="<?php echo wp_login_url(); ?>" class="px-8 py-3 bg-[#b45309] hover:bg-[#d97706] text-white rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg inline-block">
                    Member Login
                </a>
                <a href="<?php echo site_url('/about-us'); ?>" class="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-md font-semibold transition-all inline-block">
                    Learn More
                </a>
            </div>
        </div>
    </section>

    <!-- Info Cards -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#d97706] hover:shadow-2xl transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#172554] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-[#172554] mb-3">Legal Advocacy</h3>
                    <p class="text-gray-600 mb-4">Promoting the rule of law and ensuring fair representation for all citizens.</p>
                    <a href="<?php echo site_url('/about-us'); ?>" class="text-[#b45309] font-semibold flex items-center text-sm hover:underline">Read More &rarr;</a>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#172554] hover:shadow-2xl transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#172554] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-[#172554] mb-3">Resource Library</h3>
                    <p class="text-gray-600 mb-4">Access a vast digital repository of judgments, acts, and legal forms.</p>
                    <a href="<?php echo site_url('/resources'); ?>" class="text-[#b45309] font-semibold flex items-center text-sm hover:underline">Browse Library &rarr;</a>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#d97706] hover:shadow-2xl transition-shadow">
                    <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[#172554] mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-[#172554] mb-3">Member Welfare</h3>
                    <p class="text-gray-600 mb-4">Dedicated to the professional growth and social security of all advocates.</p>
                    <a href="<?php echo site_url('/executive-body'); ?>" class="text-[#b45309] font-semibold flex items-center text-sm hover:underline">View Committee &rarr;</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-[#172554] text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                <div class="p-4">
                    <div class="text-[#d97706] mb-2 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <div class="text-4xl font-bold mb-1">1,200+</div>
                    <div class="text-slate-400 text-sm uppercase tracking-wide">Active Members</div>
                </div>
                <div class="p-4">
                    <div class="text-[#d97706] mb-2 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></div>
                    <div class="text-4xl font-bold mb-1">73</div>
                    <div class="text-slate-400 text-sm uppercase tracking-wide">Years of Legacy</div>
                </div>
                <div class="p-4">
                     <div class="text-[#d97706] mb-2 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg></div>
                    <div class="text-4xl font-bold mb-1">500+</div>
                    <div class="text-slate-400 text-sm uppercase tracking-wide">Daily Cases</div>
                </div>
                <div class="p-4">
                    <div class="text-[#d97706] mb-2 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
                    <div class="text-4xl font-bold mb-1">15</div>
                    <div class="text-slate-400 text-sm uppercase tracking-wide">Awards Won</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest News -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-end mb-12">
                <div>
                    <span class="text-[#b45309] font-bold uppercase tracking-wider text-sm">Updates</span>
                    <h2 class="text-3xl font-serif font-bold text-[#172554] mt-2">Latest News & Notices</h2>
                </div>
                <a href="<?php echo site_url('/news'); ?>" class="hidden md:inline-flex items-center font-semibold text-[#172554] hover:text-[#b45309] transition">View All News &rarr;</a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php 
                $homepageNews = new WP_Query(array(
                    'posts_per_page' => 3
                ));

                if($homepageNews->have_posts()) :
                    while($homepageNews->have_posts()) : $homepageNews->the_post();
                ?>
                <article class="group cursor-pointer">
                    <div class="overflow-hidden rounded-lg mb-4 h-56 bg-gray-200">
                         <?php if ( has_post_thumbnail() ) {
                             the_post_thumbnail('medium', ['class' => 'w-full h-full object-cover transform group-hover:scale-105 transition duration-500']);
                         } else { ?>
                            <div class="w-full h-full flex items-center justify-center text-gray-400">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            </div>
                         <?php } ?>
                    </div>
                    <div class="flex items-center text-xs text-gray-500 mb-2">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3">News</span>
                        <span><?php echo get_the_date(); ?></span>
                    </div>
                    <h3 class="text-xl font-bold text-[#172554] mb-2 group-hover:text-[#b45309] transition">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                    <div class="text-gray-600 line-clamp-2">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
                <?php 
                    endwhile; 
                    wp_reset_postdata();
                else : ?>
                    <p>No recent news found. Add some posts in WordPress!</p>
                <?php endif; ?>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>`;

const indexContent = `<?php get_header(); ?>

<div class="bg-slate-50 min-h-screen">
  <div class="bg-[#172554] py-12 text-center text-white">
    <h1 class="text-3xl md:text-4xl font-serif font-bold"><?php single_post_title(); ?></h1>
  </div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-10">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <article class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <?php if ( has_post_thumbnail() ) : ?>
               <div class="h-64 overflow-hidden">
                 <?php the_post_thumbnail('large', ['class' => 'w-full h-full object-cover transform hover:scale-105 transition duration-500']); ?>
               </div>
            <?php endif; ?>
            <div class="p-8">
               <h2 class="text-2xl font-serif font-bold text-[#172554] mb-3">
                 <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
               </h2>
               <div class="text-gray-600 leading-relaxed mb-6">
                 <?php the_excerpt(); ?>
               </div>
               <a href="<?php the_permalink(); ?>" class="inline-block text-white bg-[#172554] hover:bg-[#1e3a8a] px-5 py-2 rounded text-sm font-medium transition">
                 Read More
               </a>
            </div>
          </article>
        <?php endwhile; else : ?>
          <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
        
        <!-- Pagination -->
        <div class="mt-8">
           <?php the_posts_pagination(); ?>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1 space-y-8">
        <?php dynamic_sidebar( 'sidebar-1' ); ?>
      </div>
      
    </div>
  </div>
</div>

<?php get_footer(); ?>`;

const footerContent = `<footer class="bg-[#172554] text-white pt-16 pb-8 border-t-4 border-[#d97706]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="col-span-1 md:col-span-1">
        <h3 class="font-serif font-bold text-lg text-white mb-4">Bar Association</h3>
        <p class="text-slate-300 text-sm">Upholding justice since 1950.</p>
      </div>
      
      <div>
         <?php
            wp_nav_menu( array(
                'theme_location' => 'footer-menu',
                'menu_class'     => 'space-y-2 text-sm text-slate-300',
                'container'      => false
            ) );
         ?>
      </div>
      
      <div>
        <h3 class="text-white font-bold mb-6 text-sm uppercase">Contact</h3>
        <p class="text-slate-300 text-sm">District Court Complex, Karimnagar</p>
      </div>
    </div>
    
    <div class="border-t border-slate-700 mt-12 pt-8 text-center text-xs text-slate-400">
      <p>&copy; <?php echo date('Y'); ?> Bar Association of Karimnagar. All rights reserved.</p>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>`;

  const handleDownloadAll = () => {
      downloadFile('style.css', cssContent);
      setTimeout(() => downloadFile('functions.php', functionsContent), 200);
      setTimeout(() => downloadFile('header.php', headerContent), 400);
      setTimeout(() => downloadFile('index.php', indexContent), 600);
      setTimeout(() => downloadFile('footer.php', footerContent), 800);
      setTimeout(() => downloadFile('front-page.php', frontPageContent), 1000);
  };

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
        <h1 className="text-3xl md:text-4xl font-serif font-bold">Download WordPress Theme</h1>
        <p className="text-slate-300 mt-2">Required files to install this theme</p>
      </div>

      <Breadcrumbs />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-500">
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start">
             <div className="bg-blue-100 p-2 rounded-full text-blue-800 mr-3 mt-1">
                <Check size={20} />
             </div>
             <div>
                <h3 className="font-bold text-blue-900">How to Fix "Homepage Not Showing"</h3>
                <p className="text-sm text-blue-800 mt-1">
                    I have added <b>front-page.php</b> which contains the Hero section and Homepage design. 
                    Please download all 6 files below and upload them to your theme folder.
                </p>
             </div>
          </div>

          <div className="flex justify-end mb-6">
             <button 
               onClick={handleDownloadAll}
               className="bg-navy-900 text-white px-6 py-3 rounded shadow hover:bg-gold-600 transition flex items-center font-bold"
             >
               <Download size={18} className="mr-2" /> Download All 6 Files
             </button>
          </div>

          <CodeBlock title="front-page.php" content={frontPageContent} id="front" />
          <CodeBlock title="style.css" content={cssContent} id="css" />
          <CodeBlock title="functions.php" content={functionsContent} id="php" />
          <CodeBlock title="header.php" content={headerContent} id="header" />
          <CodeBlock title="index.php" content={indexContent} id="index" />
          <CodeBlock title="footer.php" content={footerContent} id="footer" />
          
        </div>
      </div>
    </div>
  );
};

export default ThemeExportPage;