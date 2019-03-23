<?php
/**
 * Created by PhpStorm.
 * User: Sebastien
 * Date: 2018-07-15
 * Time: 19:22
 */

$context             = Timber::get_context();
$context['template'] = 'index';
Timber::render( array( 'index.twig', 'base.twig' ), $context );