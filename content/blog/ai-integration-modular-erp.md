---
title: 在模組化 ERP 中導入 AI：我的分層設計與實踐歷程
author:
  name: Frank Liao
date: 2025-12-31T00:00:00.000Z
description: 分享如何在模組化 ERP 系統中逐步加入 AI 能力，從單模組智能到全域大腦，包含設計思路、挑戰與原型心得。
minRead: 10
draft: true
---

## 我的 ERP AI 分層架構

這裡直接寫代碼塊，組件會自動攔截：

```mermaid
flowchart TD
    A[使用者查詢] --> B[LangGraph Router]
    B --> C{需求類型}
    C -->|單模組摘要| D[ai_view 直接回覆]
    C -->|需要工具| E[Tool Calling]
    E --> G{結果驗證}
    G -->|通過| H[最終回應]
```
