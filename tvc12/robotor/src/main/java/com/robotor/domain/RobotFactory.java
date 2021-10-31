package com.robotor.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RobotFactory {
    private final List<Robot> robots;
    private final Map<Class, RobotBuilderEngine> engineAsMap;

    public RobotFactory(Map<Class, RobotBuilderEngine> engineAsMap) {
        this.engineAsMap = engineAsMap;
        robots = new ArrayList<>();
    }

    public RobotFactory add(Class clazz, int quality) throws Exception {
        RobotBuilderEngine engine = engineAsMap.get(clazz);
        if (engine != null) {
            this.robots.addAll(engine.create(quality));
        } else {
            throw new Exception(String.format("class:: %s can not create at this time", clazz));
        }
        return this;
    }

    public GroupRobot build() {
        return new GroupRobot(robots);
    }

    public static RobotFactoryBuilder builder() {
        return new RobotFactoryBuilder();
    }
}

