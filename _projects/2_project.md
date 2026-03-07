---
layout: page
title: Chat Server Summarizer
description: A backend service that ingests messages from Discord, Slack, and Telegram in real time and generates on-demand AI summaries.
img: assets/img/image copy.jpg
importance: 2
category: work
github: https://github.com/soddi1/chat-summary-server
---

**Tech Stack:** Python, FastAPI, SQLAlchemy, PostgreSQL, OpenAI API

Developed a backend service that ingests messages in real time from Discord, Slack, and Telegram, storing them in a PostgreSQL database for unified archiving and analysis.

- Implemented on-demand summarization via a Discord slash command using GPT-4.
- Generated per-platform, per-channel summaries through FastAPI and asynchronous pipelines.
- Designed a unified schema to normalize messages across different chat platforms.

[View on GitHub](https://github.com/soddi1/chat-summary-server){:target="_blank"}
