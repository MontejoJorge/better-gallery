<?php
/**
 * Plugin Name:       Better Gallery
 * Description:       Example block scaffolded with Create Block tool.
 * Plugin URI:        https://github.com/MontejoJorge/better-gallery
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            MontejoJorge
 * Author URI:        https://github.com/MontejoJorge
 * License:           CC BY-NC-SA 4.0
 * License URI:       https://creativecommons.org/licenses/by-nc-sa/4.0/
 * Text Domain:       better-gallery
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_better_gallery_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_block_better_gallery_block_init' );
