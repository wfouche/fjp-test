///usr/bin/env jbang "$0" "$@" ; exit $?
//SOURCES App.java ForkJoinPoolUser.java
//JAVA 23

package io.tulip;

import io.github.wfouche.tulip.api.TulipApi;

public class AppJava23 {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json");
   }
}
