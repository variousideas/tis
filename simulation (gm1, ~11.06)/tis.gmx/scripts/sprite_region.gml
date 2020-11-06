///sprite_region(spr,x,y);
spr = argument0;
xx = argument1;
yy = argument2;

xoff = sprite_get_xoffset(spr);
yoff = sprite_get_yoffset(spr);

width = sprite_get_width(spr);
height = sprite_get_width(spr);

if (point_in_rectangle(mouse_x,mouse_y,xx-xoff,yy-yoff,xx + width - xoff,yy + height - yoff) == 1) {
    audio_play_sound(snd_btn,0,0);
    return 1;
}

return 0;
