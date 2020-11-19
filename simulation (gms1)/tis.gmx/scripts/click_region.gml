///click_region(x1,y1,x2,y2);

if (mouse_check_button_pressed(mb_left) && mouse_region(argument0, argument1, argument2, argument3)) {
    return 1;
}
return 0;
