@echo off
if not exist node_modules (call npm i)
title OTServer
node .
cmd /k