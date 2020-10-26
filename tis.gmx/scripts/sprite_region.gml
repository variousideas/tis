///sprite_region(spr,x,y);
spr = argument0;
xx = argument1;
yy = argument2;

xoff = sprite_get_xoffset(spr);
yoff = sprite_get_yoffset(spr);

width = sprite_get_width(spr);
height = sprite_get_width(spr);

return point_in_rectangle(mouse_x,mouse_y,xx-xoff,yy-yoff,xx + width - xoff,yy + height - yoff);
