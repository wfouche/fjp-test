///usr/bin/env jbang "$0" "$@" ; exit $?
//SOURCES App.java ForkJoinPoolUser.java
//RUNTIME_OPTIONS -XX:+UseCompactObjectHeaders
//JAVA 25

package io.tulip;

import io.github.wfouche.tulip.api.TulipApi;

public class AppJava25 {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json");
   }
}
