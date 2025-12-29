#!/bin/bash

export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html

sdk install java 17.0.17-tem 
sdk use     java 17.0.17-tem 

./run_bench_17.sh

sdk install java 21.0.9-tem
sdk use     java 21.0.9-tem

./run_bench_21.sh

sdk install java 23.0.2-tem  
sdk use     java 23.0.2-tem  

./run_bench_23.sh

sdk install java 24.0.2-tem 
sdk use     java 24.0.2-tem 

./run_bench_24.sh

sdk install java 25.0.1-tem   
sdk use     java 25.0.1-tem   

./run_bench_25.sh

sdk install java 26.ea.29-open 
sdk use     java 26.ea.29-open 

./run_bench_26.sh

rm -f -r app.log benchmark_report* benchmark_output.json benchmark_config.adoc benchmark_config.html
