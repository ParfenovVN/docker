# Docker learning


## Введение

- Микросервисная архитектура – обзор, основные компоненты и их назначение.
- Существующие контейнерные решения (podman, docker, rkt, cri-o, ..).
- Оркестрация кластера контейнеров (mesos, kubernetes, swarm ).

##  Введение в Docker

- Проект, документация, ресурсы.
- Принцип работы, основные компоненты, установка в Ubuntu Server.
- Базовые команды в контексте docker (ps, top, start/stop, login/logout, create/rm, exec, cp,
pull/push,...).
- Установка простого контейнера (httpd, mysqld, …) из репозитория DockerHub, его
настройка.
- Базовая настройка портов и файловой системы.
- Контекст docker-compose - введение.
- Установка и управление несколькими контейнерами на выделенном узле Ubuntu.
- Практическая работа. Установка docker и работа с контейнерами. Запуск и управление
приложениями в контейнере.

##  Настройка, расширение и кластеризация Docker

- Дополнительная работа с DockerHub.
- Развёртывание контейнеров.
  - Скрипты командной оболочки.
  - Локальный реестр.
  - Сетевой реестр. Настройка доступа к реестру в организации.
- Настройка сетевой инфраструктуры.
- Обнаружение сервисов.
- Безопасность контейнеров.
- Ведение журналов. Syslog.
- Управление контейнерами через Portainer.
- Кластер Swarm.
- Существующие проблемы и ограничения.
- Практическая работа.