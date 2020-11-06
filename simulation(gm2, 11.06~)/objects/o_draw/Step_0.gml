// Move
spd = 20;
if (keyboard_check(vk_left))
    x -= spd;
if (keyboard_check(vk_right))
    x += spd;
if (keyboard_check(vk_up))
    y -= spd;
if (keyboard_check(vk_down))
    y += spd;
if (keyboard_check(vk_enter))
    view_shake = 30;

if (x < 640)
    x = 640;
if (y < 360)
    y = 360;
    
// View - smooth follow
__view_set( e__VW.XView, 0, __view_get( e__VW.XView, 0 ) + (x-640)-__view_get( e__VW.XView, 0 )) / 12 + choose(view_shake,-view_shake)) );
__view_set( e__VW.YView, 0, __view_get( e__VW.YView, 0 ) + (y-360)-__view_get( e__VW.YView, 0 )) / 12 + choose(view_shake,-view_shake)) );

if (view_shake>1)  {view_shake -= view_shake/6;}
else    {view_shake = 0;}

__view_set( e__VW.WView, 0, __view_get( e__VW.WView, 0 ) + (1280 * view_zoom - __view_get( e__VW.WView, 0 )) / 6) );
__view_set( e__VW.HView, 0, 0.5625 * __view_get( e__VW.WView, 0 ) );

