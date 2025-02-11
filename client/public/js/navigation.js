$(document).ready(function () {
    $('.nav-responsive').click(function () {
        $('.responsive-menu .main-navigation').slideToggle();
        $('.nav-responsive div').toggleClass('active');
    });

    $(".treeview-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true
    });
    
    $('.treeview-list a.active').parent().removeClass('expandable');
    $('.treeview-list a.active').parent().addClass('collapsable');
    $('.treeview-list .collapsable ul').css('display', 'block');
});