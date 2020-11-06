draw_self();

// light_mode: 배열(왼쪽, 아래, 오른쪽, 위쪽 순)
// 0(빨)  1(노)  2(좌)  3(초)

// 왼쪽
draw_sprite_ext(s_light,light_mode[0],x + 94,y + 200,1,1,0,c_white,0.7);

// 아래
draw_sprite_ext(s_light,light_mode[1],x + 200,y + 255,1,1,90,c_white,0.7);

// 오른쪽
draw_sprite_ext(s_light,light_mode[2],x + 255,y + 149,1,1,180,c_white,0.7);

// 위쪽
draw_sprite_ext(s_light,light_mode[3],x + 149,y + 94,1,1,270,c_white,0.7);

