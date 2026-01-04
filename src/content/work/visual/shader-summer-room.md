---
draft: false
order: 30
classification: visual
title: 「夏の涼しげな部屋」のシェーダー開発
description: 
  - シリコンスタジオハッカソン2025にて制作しました。
  - 2Dイラスト調トーンシェーダやスクリーンスペース反射などをHLSLで実装しました。
publishDate: 2025-09-01 00:00:00
tags:
  - Unity
  - HLSL
  - Shader
  - Hackathon
img: /img/ss_hackathon_2025_scene.jpg
img_alt: 「夏の涼しげな部屋」シーンのビジュアルプレビュー
subtitle: ハッカソン（個人）での3Dシーン制作
productionDate: 2025-08 ~ 2025-09
role: ハッカソン（個人）での3Dシーン制作
video: /img/SSKK-Hackathon2025_movie.mp4
techs:
  - Unity (URP)
  - HLSL/ShaderLab
  - RenderTexture
  - Screen Space Lens Flare
---

**概要：**  
*   「2Dイラスト風 × 水中の涼感」を軸にした室内シーンを制作。質感はURP＋カスタムHLSLで統一し、要素ごとにテクスチャ重ね塗りで変化を付与しました。（3DCGモデルはシリコンスタジオ株式会社が製作）

**技術要素：**  
*   **トーンシェーディング：** 光方向と法線の内積から3段階のしきい値で色分け。各段の閾値・色濃度をプロパティで制御。
*   **床の反射：** メインカメラを平面で鏡映した位置に反射カメラを配置。RenderTexture を割り当て、床シェーダで透視投影を考慮して参照。
*   **天井の発光：** 発光成分にメタボール状マスクを合成して動的な明滅を表現。
*   **ポスト表現：** Screen Space Lens Flare を適用し、アクセントを付与。

**デザイン面の工夫：**  
*   背景（壁・床）はライトブルー、家具はダークブルーに統一して寒暖差を演出。
*   黄色をアクセントカラーに採用し、視線誘導とリズムを付与。
