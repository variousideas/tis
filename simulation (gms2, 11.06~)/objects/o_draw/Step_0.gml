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
    
// View - smooth 배제.
camera_set_view_pos(view_camera[0], x, y);

/*
기존 코드
view_xview[0] += ((x-640)-view_xview[0]) / 12 + choose(view_shake,-view_shake);
view_yview[0] += ((y-360)-view_yview[0]) / 12 + choose(view_shake,-view_shake);

// View - 확대축소, shake
view_wview[0] += (1280 * view_zoom - view_wview[0]) / 6;
view_hview[0] = 0.5625 * view_wview[0];

if (view_shake>1)  {view_shake -= view_shake/6;}
else    {view_shake = 0;}

camera_set_view_pos(camera, 


로 대체되었습니다.
x를 더하려면 camera_set_view_pos(camera, camera_get_view_x(camera)+더할 값, camera_get_view_y(camera)) 식으로 적으면 됩니다.
그외 뷰 관련 변수들은 카메라 관련 변수들로 통합 및 대체되었으며, 카메라 관련 변수들은 게임메이커 스튜디오 2 도움말 - Cameras를 참조해주세요.
*/