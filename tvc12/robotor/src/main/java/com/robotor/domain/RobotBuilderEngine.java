package com.robotor.domain;

import java.util.List;

public interface RobotBuilderEngine<T extends Robot> {
    List<T> create(int quality);
}
