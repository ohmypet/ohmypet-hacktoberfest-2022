package com.robotor.domain;

import java.util.HashMap;
import java.util.Map;

public class RobotFactoryBuilder {
    private final Map<Class, RobotBuilderEngine> engineAsMap;

    public RobotFactoryBuilder() {
        this.engineAsMap = new HashMap<>();
    }

    public RobotFactoryBuilder addEngine(Class clazz, RobotBuilderEngine engine) {
        this.engineAsMap.put(clazz, engine);
        return this;
    }

    public RobotFactory build() {
        return new RobotFactory(this.engineAsMap);
    }
}
