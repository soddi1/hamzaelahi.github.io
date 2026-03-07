---
layout: page
title: Distributed Key-Value Store (RAFT)
description: A fault-tolerant distributed key-value store using the Raft consensus algorithm, with WAL-based crash recovery.
img: assets/img/12.jpg
importance: 1
category: work
github: https://github.com/soddi1/raft-kv-store
---

**Tech Stack:** Go, Raft Consensus, gRPC

Implemented a distributed fault-tolerant key-value store using the Raft consensus algorithm for leader election and log replication.

- Designed a persistent Write-Ahead Log (WAL) and snapshotting mechanism enabling crash recovery.
- Built gRPC-based communication between nodes for replication and client requests.
- Handled leader election, log consistency, and membership changes per the Raft specification.

[View on GitHub](https://github.com/soddi1/raft-kv-store){:target="_blank"}
