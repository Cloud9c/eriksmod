import { Resizer } from './Resizer.js';
import { Sidebar } from './Sidebar.js';
import { App, ComponentManager } from '../../build/taro.module.js';
import { Viewport } from './Viewport.js';
import { Toolbar } from './Toolbar.js';
import { SidebarScene } from './Sidebar.Scene.js';
import { SidebarAssets } from './Sidebar.Assets.js';
import { SidebarInspector } from './Sidebar.Inspector.js';
import { Navbar } from './Navbar.js';

import './EditorComponents.js';

function Editor() {

	this.resizer = new Resizer();
	this.sidebar = new Sidebar();

	this.app = new App( { canvas: document.getElementById( 'canvas' ), antialias: true } );
	this.viewport = new Viewport( this );
	this.inspector = new SidebarInspector( this );
	this.render = this.viewport.render;
	this.addEntity = this.viewport.addEntity;

	this.toolbar = new Toolbar( this );
	this.sidebarScene = new SidebarScene( this );
	this.sidebarAssets = new SidebarAssets( this );

	this.navbar = new Navbar( this );

	this.render();

	// default stuff

	let entity;

	entity = this.viewport.addEntity( 'Camera' );
	this.inspector.addComponent( entity, 'camera' );
	this.inspector.addComponent( entity, 'audioListener' );
	entity.position.set( 0, 0, 5 );

	entity = this.viewport.addEntity( 'Torus Knot' );
	this.inspector.addComponent( entity, 'geometry', {
		type: 'torusKnot'
	} );
	this.inspector.addComponent( entity, 'material', {
		type: 'phong'
	} );

	entity = this.viewport.addEntity( 'Light' );
	this.inspector.addComponent( entity, 'light', {
		type: 'directional'
	} );
	entity.position.set( 0, 5, 1 );

}

const editor = new Editor();

// if ( 'serviceWorker' in navigator ) {

// 	try {

// 		navigator.serviceWorker.register( 'sw.js', { type: 'module' } );

// 	} catch ( error ) {

// 	}

// }
