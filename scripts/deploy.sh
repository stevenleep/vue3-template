#!usr#!/usr/bin/env bash

echo "Deploy script"

# 为什么需要将这个脚本暴露出来？
# 默认情况下此脚本应该在 CI/CD 环境中预设为标准流程，也方便统一部署管理
# 但一些项目在通用流程无法满足时，可以通过此脚本自定义环境注入流程
#   # 比如说某些项目需要增加报错时候的用户行为记录行为（但对于普通项目监控系统足够），此时传统模式下需要让运维或具有权限的人员更改脚本
# 在CI执行时候我们只认 pnpm run predeploy && pnpm run deploy && pnpm run postdeploy 三个命令

# Test variables
# VITE_SERVICE_URL="https://vite.netlify.app"
# VITE_SENTRY_DSN="https://vite.netlify.app-bb"
# VITE_SOURCE_MAP_URL="https://vite.netlify.app-aa"

# 这些你需要的环境变量，可以在 CI/CD 中配置
runSendForMacOS() {
    sed -i "" "s#VITE_SERVICE_URL=.*#VITE_SERVICE_URL=$VITE_SERVICE_URL#g" .env.production &&
        sed -i "" "s#VITE_SENTRY_DSN=.*#VITE_SENTRY_DSN=$VITE_SENTRY_DSN#g" .env.production &&
        sed -i "" "s#VITE_SOURCE_MAP_URL=.*#VITE_SOURCE_MAP_URL=$VITE_SOURCE_MAP_URL#g" .env.production
}

runSendForLinux() {
    sed -i "s#VITE_SERVICE_URL=.*#VITE_SERVICE_URL=$VITE_SERVICE_URL#g" .env.production &&
        sed -i "s#VITE_SENTRY_DSN=.*#VITE_SENTRY_DSN=$VITE_SENTRY_DSN#g" .env.production &&
        sed -i "s#VITE_SOURCE_MAP_URL=.*#VITE_SOURCE_MAP_URL=$VITE_SOURCE_MAP_URL#g" .env.production
}

# NOTE：如何知道需要注入到哪个文件中？

# 方式一：通过git flow的约定
# 根据部署时候的分支来判断需要注入到哪个环境
# 例如：master 分支注入到生产环境，dev 分支注入到开发环境，test 分支注入到测试环境

# 方式二：通过在构建时增加特定的参数来判断需要注入到哪个环境

injectEnvionmentVariablesIntoEnvFile() {
    if [ ! -f ".env.production" ]; then
        echo "Create .env.production file"
        touch .env.production

        echo "VITE_SERVICE_URL=$VITE_SERVICE_URL" >>.env.production &&
            echo "VITE_SENTRY_DSN=$VITE_SENTRY_DSN" >>.env.production &&
            echo "VITE_SOURCE_MAP_URL=$VITE_SOURCE_MAP_URL" >>.env.production
    fi

    if [ -f ".env.production" ]; then
        echo "Replace VITE_SERVICE_URL value in .env.production file"
        # sed -i "s#VITE_SERVICE_URL=.*#VITE_SERVICE_URL=$VITE_SERVICE_URL#g" .env.production

        if [ "$(uname)" == "Darwin" ]; then
            # Mac OS X platform
            runSendForMacOS
            echo "Inject environment variables into .env.production file successfully!"

        elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
            # GNU/Linux platform
            runSendForLinux
            echo "Inject environment variables into .env.production file successfully!"

        else
            echo "Unsupported platform"
        fi
    fi
}

injectEnvionmentVariablesIntoEnvFile
