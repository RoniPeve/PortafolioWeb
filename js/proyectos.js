$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.filtros_proyectos .proyecto_item[cat_proyecto="all_proyectos"]').addClass('ct_active_proyectos');

	// FILTRANDO PRODUCTOS  ============================================

	$('.proyecto_item').click(function(){
		event.preventDefault(); // Evita que se recargue la página
		var catProyectos = $(this).attr('cat_proyecto');
		console.log(catProyectos);
		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.proyecto_item').removeClass('ct_active_proyectos');
		$(this).addClass('ct_active_proyectos');

		// OCULTANDO PRODUCTOS =========================
		$('.imagen_proyecto').css('transform', 'scale(0)');
		function hideProyecto(){
			$('.imagen_proyecto').hide();
		} setTimeout(hideProyecto,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProyecto(){
			$('.imagen_proyecto[cat_proyecto="'+catProyectos+'"]').show();
			$('.imagen_proyecto[cat_proyecto="'+catProyectos+'"]').css('transform', 'scale(1)');
		} setTimeout(showProyecto,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.proyecto_item[cat_proyecto="all_proyectos"]').click(function(){
		function showtodos(){
			$('.imagen_proyecto').show();
			$('.imagen_proyecto').css('transform', 'scale(1)');
		} setTimeout(showtodos,400);
	});
});