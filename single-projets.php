<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2019-01-10
 * Time: 18:37
 */

$context            = Timber::get_context();
$context['project'] = new Timber\Post();
$context['projets'] = Timber::get_posts( array(
	'post_type' => 'projets',
	'orderby'   => 'date',
	'order'     => 'DESC',
	'status'    => 'publish'
) );
Timber::render( array( 'single-projets.twig', 'index.twig' ), $context );