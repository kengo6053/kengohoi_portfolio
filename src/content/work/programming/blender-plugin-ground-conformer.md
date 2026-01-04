---
draft: false
order: 50
classification: programming
title: Blenderプラグイン「ground_conformer」の開発
description: 
  - 3Dモデリングの時間短縮を目的に、オブジェクトを地形に自然に接地させるBlender用プラグインを自作しました。
publishDate: 2025-05-01 00:00:00
tags:
  - Python
  - Blender API
  - Tool Dev
img: /img/blender_plugin_1_function.png
img_alt: blenderプラグインのプレビュー
subtitle: 個人でのBlenderのプラグイン開発
productionDate: 2025-05 ~ 2025-05
role: 個人でのBlenderのプラグイン開発
techs:
  - Python 3.10
  - Blender API
links:
  - label: GitHub Repository
    url: https://github.com/kengo6053/ground_conformer
---

<figure class="work-image">
  <img src="/img/blender_plugin_1_workflow.png" alt="ワークフロー改善を示すフローチャート" style="width:80%; border-radius:0.5rem; margin:1rem 0;" />
</figure>

**開発の動機：**  
*   背景モデリングをしている中で、小物を地形に自然に配置するための反復作業が多く、時間がかかると感じ、それを解決するためのツールを開発しました。

**アプローチ：**  
*   選択したオブジェクトをワンクリックで、底面を地形に必ず接地させる「底面接地」機能を開発。バウンディングボックスの最下端を求め、ヒット面上にオフセット配置。
*   地形の凹凸や斜面にも対応するため、Blender の `scene.ray_cast()` を用して真下方向にレイを飛ばし、ヒット位置を取得して位置合わせを実施。これにより手動で位置調整する工数を大幅に削減。
*   任意で「法線合わせ（Z 軸をヒット面法線へ回転）」機能を追加。岩、木箱、樽などを自然な向きで配置し、生活感・リアルさを向上。
*   複数オブジェクトを一括処理できるバッチ対応機能、及び `bl_options = {'REGISTER', 'UNDO'}` を活用して元に戻せる仕組みを導入し、運用の安心性を担保。

**わかりやすさ（UI／操作感）：**  
*   Blender の「ツール」パネルにカスタム UI を設置。大きなボタン＋アイコン付きで直感的に操作可能。
*   「Ground Conform」ボタンをクリック → 即座にオブジェクト配置処理が実行される流れに。オペレーター設定（F9）から「Ray Length」「Align to Normal」などのオプションを変更可能。
*   「F3 → Ground Conform → 右クリック → ショートカットに割り当て」というワークフローもガイドし、頻繁に使う操作をキー割り当てしてチーム運用も効率化。

**コーディングルール：**  
*   言語：Python 3.10 を使用。Blender API（bpy）によりオペレーター・パネル・バッチ処理を実装。
*   バージョン管理：Git によるリポジトリ運用。
