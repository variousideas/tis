/*
state_where: 초기 상태 및 앞으로 누적될 상태 (처음엔 with로 받음)
    0(왼쪽)  1(아래)  2(오른쪽)  3(위쪽)

state_will: 좌회전, 직진, 우회전 예정 등에 대한 정보
    0(좌회전)  1(직진)  2(우회전)
    
state_path: 예정 path (아래 switch문에서 결정됨)
*/

switch (state_where) {
case 0:
    angle_plus = 0;
    if (state_will == 0)
        state_path = p_left_left;
    else if (state_will == 2)
        state_path = p_right_left;
    break;
case 1:
    angle_plus = 90;
    if (state_will == 0)
        state_path = p_left_down;
    else if (state_will == 2)
        state_path = p_right_down;
    break;
case 2:
    angle_plus = 180;
    if (state_will == 0)
        state_path = p_left_right;
    else if (state_will == 2)
        state_path = p_right_right;
    break;
case 3:
    angle_plus = 270;
    if (state_will == 0)
        state_path = p_left_up;
    else if (state_will == 2)
        state_path = p_right_up;
    break;
default: //assert
    show_message("ERR: o_car_universial: create: 1");
}

if (state_will == 0 || state_will == 2) {
    path_start(state_path, 1, 0, 0);
    //path_speed = 10;
}

/* */
/*  */
