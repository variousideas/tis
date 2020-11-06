if step_one == 0 {
    step_one = 1;
    event_user(0);
}

//if is_collipse == 0
//    path_speed = 1;

if ((path_position >= 0.3) && (path_position <= 0.7)) {
    pos = 5/2*(path_position - 0.3);
}
if (path_position > 0.7)
    pos = 1;

if state_will == 0 {
    image_angle = 90 * pos + angle_plus;
}
else if state_will == 2 {
    image_angle = -90 * pos + angle_plus;
}
is_collipse = 0;

