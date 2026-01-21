///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.github.wfouche.tulip:tulip-runtime:2.1.16
//DEPS org.slf4j:slf4j-api:2.0.17
//DEPS ch.qos.logback:logback-core:1.5.25
//DEPS ch.qos.logback:logback-classic:1.5.25
//SOURCES ForkJoinPoolUser.java
//RUNTIME_OPTIONS -Xms2g -Xmx2g -XX:+UseG1GC
//FILES ../../benchmark_config.json
//FILES ../../logback.xml
