---
layout: page
title: ScholarRAG
description: A hybrid Retrieval-Augmented Generation (RAG) system for research Q&A using FAISS-indexed academic papers with optional live Wikipedia retrieval.
img: assets/img/image.png
importance: 3
category: work
github: https://github.com/soddi1/research-rag-assistant
---

**Tech Stack:** Python, LangChain, FAISS, OpenAI API, Wikipedia

Built a hybrid Retrieval-Augmented Generation (RAG) system that answers research queries using a FAISS-indexed vector store of academic papers with optional live Wikipedia retrieval.

- Implemented document ingestion, embedding, and context-assembly pipeline via LangChain with citation tracking.
- Exposed a REST API for research Q&A, achieving 99% retrieval accuracy on benchmark queries.
- Supported optional live Wikipedia retrieval to supplement indexed paper knowledge.

[View on GitHub](https://github.com/soddi1/research-rag-assistant){:target="_blank"}
