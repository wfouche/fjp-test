#!/bin/bash

set_title() {
  echo -ne "\033]2;$1\007"
}

export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html

export JBANG_APP_JAVA_OPTIONS="-Djdk.virtualThreadScheduler.parallelism=4"

set_title "Java 21"
echo "n" | sdk install java 21.0.9-tem
sdk use     java 21.0.9-tem

./run_bench_21.sh

set_title "Java 23"
echo "n" | sdk install java 23.0.2-tem
sdk use     java 23.0.2-tem  

./run_bench_23.sh

set_title "Java 24"
echo "n" | sdk install java 24.0.2-tem
sdk use     java 24.0.2-tem 

./run_bench_24.sh

set_title "Java 25"
echo "n" | sdk install java 25.0.2-tem
sdk use     java 25.0.2-tem

./run_bench_25.sh

set_title "Java 26"
echo "n" | sdk install java 26.ea.31-open
sdk use     java 26.ea.31-open

./run_bench_26.sh

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html
