---
draft: false
order: 20
classification: programming
title: 2Dゲーム「Three Steps Mage」の開発
description: 
  - 「スライド移動 × 1ターン3行動」を核としたターン制パズルゲーム。
  - ギミック拡張を前提とした疎結合なシステム設計を担当。
publishDate: 2025-12-01 00:00:00
tags:
  - Unity
  - C#
  - Game Dev
img: /img/ThreeStepsMaze/ThreeStepsMaze_PlayerTurn.png
img_alt: Three Steps Mage ゲーム画面
subtitle: チームでのゲーム開発
productionDate: 2025-12 ~ 2025-12
role: チームでのゲーム開発
video: /img/ThreeStepsMaze/ThreeStepsMaze_PlayingVideo.mp4
techs:
  - Unity
  - URP
  - C#
  - Git
---

**プロジェクト概要：**  
*   「止まれないスライド移動」と「1ターン3行動」を組み合わせた、短時間で高密度な戦略性を味わえるターン制迷路パズルゲームです。

**ゲームのリンク：**  
*   https://play.unity.com/en/games/f12b56ee-b603-4119-8de3-d98a1f1ce1ae/three-steps-maze

**遊び方：**  
*   上下左右の入力で、壁に当たるまで直進移動
*   1ターンにつき最大3回まで行動可能
*   3回行動後、大砲や針などのギミックが一斉に作動
*   危険を避け、ゴールマスで停止するとクリア

**担当範囲（システム・バックエンド）：**  
*   TurnManagerによるターン制状態管理（行動 → 判定 → ギミック実行）
*   BaseGimmickを用いた拡張性の高いギミック設計
*   Unity座標と論理グリッド座標を分離した堅牢なロジック構築

**こだわりの演出実装：**  
*   PlayerVisualControllerにより、ロジックと見た目を分離
*   移動方向に応じた自然な回転・滑らかな動きの制御
*   罠の作動タイミングを視覚的に伝える予兆表現を実装

**自動化・制作効率化への取り組み：**  
*   PrototypeSetupツールにより、必要なマネージャー群を1クリックで配置
*   プロトタイプ制作時の初期セットアップ工数を大幅に削減

**工夫した点（マップ制作）：**  
*   ScriptableObject（GridData / StageMap）によるデータ駆動型レベル設計
*   Unityインスペクター上で直感的にマス・ギミックを配置可能
*   ステージ量産・調整の高速化とGit競合リスクの低減を実現
