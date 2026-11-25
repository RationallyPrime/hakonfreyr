export const personalInfo = {
  name: 'Hákon Freyr Gunnarsson',
  displayName: 'Hákon Freyr',
  title: 'AI Engineer',
  status: 'Open to full-time roles',
  company: 'Krates ehf.',
  location: 'Garðabær, Iceland',
  email: 'rationallyprime@gmail.com',
  phone: '+354 660-9570',
  github: 'https://github.com/RationallyPrime',
  website: 'https://hakonfreyr.com',
}

export const professionalSummary =
  "AI engineer. I build production software at the pace of a full engineering team by running my own team of AI agents: 1,742 pull requests merged between March and October 2026, including accounting and payroll systems that ran a simulated company's month with every figure correct. Mathematics and statistics foundation (BSc mathematics, MSc AI and data science), with production systems in genomics, finance, travel and enterprise software. Looking for a full-time role building AI systems that can be trusted with real work. I trust measurements over demos."

export const designPrinciple =
  'One habit across every domain: put the guarantees in the architecture, so a system is correct by construction rather than by care.'

export const portfolioRevision = '2026-11'

export interface Project {
  slug: string
  name: string
  subtitle: string
  keyDimension?: string
  techStack: string
  description: string
  longDescription: string
  highlights: string[]
  metrics?: { stat: string; text: string }[]
  architectureNotes?: string[]
  githubUrl?: string
  githubLabel?: string
  url?: string
  urlLabel?: string
  caseFile?: string
}

export const featuredProjects: Project[] = [
  {
    slug: 'residual-modeling',
    keyDimension: '6.6% median error',
    name: 'Residual Modeling',
    subtitle: 'Interpretable, Counterfactual Valuation of Icelandic Homes',
    techStack: 'Python, LightGBM, Postgres/PostGIS, FastAPI, Next.js, Pydantic, uv workspace',
    description:
      'A stack of gradient-boosted residual layers that values Icelandic homes, explains every price in krónur per layer, and re-prices a home under what-if changes.',
    longDescription:
      'A valuation model for Icelandic residential property built as a stack of gradient-boosted residual layers. A sale price is treated as a product of independent signals: the property itself, its broad location, the local market around it, liquidity and timing, and the agency that sold it. In house-price-index-deflated log-price space each signal becomes an additive term, and each LightGBM layer is trained on the residual the layers before it leave. The estimate is therefore a sum of attributable parts, and every valuation comes back as krónur contributed by each layer rather than as one opaque number. The same model answers counterfactual questions: change the floor area, rooms, floor, construction year or selling agency, and it re-prices the home and shows which layers moved.',
    highlights: [
      'Gradient-boosted residual stacking: one LightGBM model per layer, each fitted to what the earlier layers could not explain, in HPI-deflated log-price space.',
      'Interpretable by construction: every valuation returns the krónur contributed by structure, broad location, local market, and liquidity and timing, each layer with its own cross-validated R², ready for a waterfall chart.',
      'Counterfactual pricing: a batch scenarios endpoint re-prices a property under changed rooms, floor area, lot size, floor, construction year, property type, postal code, view or selling agency, and returns the price delta and the per-layer breakdown for each scenario.',
      'Comparables done properly: the local-market layer learns only comparable-sale deltas, anchored on the frozen structure-and-location prediction and recomputed out of fold, so training and serving use the same comparables.',
      'Leakage hunted down: early cross-validation scores of 94.5% traced back to asking-price and assessment leakage and random splits. The model is now judged only on time-ordered out-of-fold sales.',
    ],
    metrics: [
      { stat: '12,709', text: 'time-ordered out-of-fold sales in the evaluation' },
      { stat: '6.6%', text: 'median absolute error across all sales' },
      { stat: '5.9%', text: 'median absolute error for apartments (9,507 sales)' },
      { stat: '11', text: 'packages in a uv workspace with an enforced dependency graph' },
    ],
    architectureNotes: [
      'Agency effects use empirical-Bayes shrinkage per agency, so small agencies are pulled toward the market rather than over-fitted.',
      'A listing-presentation layer is quarantined until it beats the holdout: it raised cross-validation scores without improving held-out sales.',
      'Spatial structure combines a postal-area prior with a continuous-coordinate residual, promoted to depth 10 after an ablation study.',
      'Every trained model carries its lineage, and the serving cache is refreshed from the production artifacts so the API and the model never disagree.',
      'Served end to end: precomputed market baselines in Postgres, live inference that applies agency effects on request, a FastAPI service and a Next.js valuation app with a waterfall of layer contributions and a scenarios panel.',
    ],
  },
  {
    slug: 'ConceptStudio',
    keyDimension: '124 frames in 1.64 s',
    name: 'ConceptStudio',
    subtitle: 'Concept Training and 3D Shot Planning on a Mac',
    techStack:
      'Swift, SwiftUI, RealityKit, Blockout (ported from Sam Wasserman’s Apache-2.0 motion engine), Python, pydantic-ai, FastAPI, Docker, RunPod, Hugging Face, AI Toolkit, LTX trainer, vLLM, Agent Skills',
    description:
      'I built a native Mac app that trains an image or video model on your photos and lets you stage a shot in 3D and export the controls for video generation.',
    longDescription:
      'I designed and built ConceptStudio to make AI video on a Mac. To teach a model a person, product, style or movement, you crop and caption your own photos or clips. The app rents a GPU within your budget and returns the trained adapter on Hugging Face. I ran that workflow end to end in a signed, notarised build on 14 October 2026. In the Shots workspace you plan what the camera will see, when people move and how a video model should follow the scene.',
    highlights: [
      'I built a 3D stage with stand-in figures, set pieces, timed marks and a virtual camera with real lens settings. Draw perspective lines on a location photo and Shots solves the lens, tilt and roll to match it.',
      'You can block a shot from a one-line description, adjust it on the stage, then turn the finished shot back into staging text and a generation prompt.',
      'Shots exports a validated package for MiniMax H3 in ComfyUI with guide stills, pose and layout control videos, a mask for each character, staging text and the prompt.',
      'Captions shaped for the model being trained: caption instructions are an Agent Skills directory with one profile per caption style, so modern image models get dense prose, SDXL gets short lines that fit CLIP, and MiniMax H3 gets its structured shot fields. Every caption names the concept with its trigger and describes everything outside it.',
      'Any captioning model, chosen at run time: sign in with a ChatGPT plan, connect OpenRouter, use a provider key, or point at a self-hosted vLLM server. An optional second model reviews each caption and can send it back once with notes.',
      'Stronger defaults where they are measured: regularisation images drawn from the base model itself and captioned by the project’s own captioner keep the model’s sense of the class, and REPA aligns its features with a frozen DINOv2 encoder. Both are on by default for Qwen-Image-2.1.',
      'Matched comparisons: the base and the trained model render the same prompts with the same seeds, so the effect of the adapter is the only difference on screen.',
      'Built-in help explains every term in a 177-entry glossary, each entry in two readings: plain language for a beginner and the technical detail behind it.',
    ],
    metrics: [
      { stat: '1.64 s', text: 'full 124-frame shot export on an M4 Mac' },
      { stat: '8.9 × 10⁻¹⁶', text: 'maximum difference between the Swift motion engine and the original Blockout engine across about 24,700 values in eight scenes' },
      {
        stat: '10,004',
        text: 'training steps in 1 h 19 min for US$3.99 of rented GPU, against a US$10 run budget: the first run driven entirely through the app (14 October 2026)',
      },
      {
        stat: '0.05 → 0.34',
        text: 'face match to held-out photos for a likeness adapter on Qwen-Image-2.1, from the base model to 2,500 training steps on ConceptStudio’s GPU images (15 October 2026)',
      },
      { stat: '26', text: 'trainable models in one shared table: 6 with tested recipes and 20 more through AI Toolkit' },
      { stat: '9', text: 'screens, from a folder of photos to a trained adapter' },
    ],
    architectureNotes: [
      'I wrote one deterministic evaluator for the shot timeline. Playback, scrubbing, still capture and export all ask it for the same scene at a given frame.',
      'I defined the contracts up front and built Shots in four parallel lanes. I made the first commit on 25 October 2026 and merged all four lanes by 1 November. The wider Shots work through 15 November spans about 40 merged pull requests. The whole app contains about 57,000 lines of Swift.',
      'One model table, two readers: every supported model is one reviewed row of a JSON table. The Mac app builds its pickers, defaults and limits from it, and the GPU images carry the same file to write the trainer’s configuration, so adding a model is a row and an image rebuild rather than new code paths.',
      'My own GPU images: each rented computer runs a container image I build, with a small control agent. The app talks to it over one authenticated HTTP API, and services start from a fixed catalogue, never from shell strings.',
      'Money is guarded in the design: spending is capped per run and per computer, an idle computer is stopped (but not while the app is still uploading to it), and a computer holding a result that has not been saved cannot be removed.',
      'Pinned upstream: trainer commits and Hugging Face weight revisions are pinned in code, so a training run never follows a moving main branch, and moving a pin is a reviewed change.',
      'Native and private: SwiftUI, sandboxed, credentials in the Keychain, projects in ordinary folders the user chooses, and no subprocesses. The Python package behind it is the reference implementation and command-line tool for the same job file and caption skill.',
    ],
    githubUrl: 'https://github.com/RationallyPrime/concept-studio',
    githubLabel: 'source',
  },
  {
    slug: 'homegrown-hero-films',
    keyDimension: '60.4 s with sound',
    name: 'H3Forge',
    subtitle: 'Minute-long video takes with synchronised sound',
    techStack: 'PyTorch, ComfyUI, MiniMax H3, RunPod, NVIDIA RTX VSR, RIFE, YouTube Data API, Next.js',
    description:
      'I extended MiniMax H3 from roughly 15-second clips to minute-long takes with synchronised sound for Homegrown Hero Films.',
    longDescription:
      'I built H3Forge to carry a continuous shot beyond the roughly 15 seconds MiniMax H3 was trained on. I window picture and sound together on the model’s joint stream, placing each window at its actual time in the take. In one pass I rendered 60.4 seconds of 1344 × 768 video at 24 fps with synchronised audio, using under 50 GB of GPU memory.',
    highlights: [
      'I designed a one-way hand-over between windows. The earlier window owns the picture in the overlap, and the later window reads it at reduced noise. The tools I built on, including ComfyUI core, WanVideoWrapper and FlowLong, average the windows there. On the comparison take, overlap flicker fell from 0.49 to 0.03 and the joins were as sharp as the rest of the take.',
      'I applied the same hand-over to sound. In a dialogue test it restored the first two seconds of a line that began at a window boundary.',
      'I give each beat its own text and references on a prompt timeline and keep the pose-control video in step with its window. To avoid jumps I repeat the setting in each beat and state the subject’s size in frame and final pose.',
      'I measure each join in a partially denoised draft and redo the joins that need it. This is the default in my production kit.',
      'I adapted the six-step workflow for long takes. A 30-second render took about seven minutes, down from 39.',
    ],
    metrics: [
      { stat: '60.4 s', text: 'continuous take with sound, rendered in one pass under 50 GB of GPU memory' },
      { stat: '0.49 → 0.03', text: 'measured flicker in the overlapping frames after the one-way hand-over' },
    ],
    architectureNotes: [
      'For Homegrown Hero Films I make short films, animated or photoreal, in which a child is the hero. I generate the footage on rented GPUs with H3Forge’s sparse attention, FETA and joint audio-video windows.',
      'I built a frame-by-frame quality check for story, identity continuity and photorealism before release. I upscale each shot with NVIDIA RTX VSR and interpolate it to 60 fps with RIFE, so interpolation never blends two shots. I schedule the finished films for YouTube and TikTok.',
    ],
    url: 'https://homegrownherofilms.com',
    urlLabel: 'Watch Homegrown Hero Films',
    githubUrl: 'https://github.com/RationallyPrime/ComfyUI-H3Forge',
  },
  {
    slug: 'sokrates-idr',
    keyDimension: 'Rulings back to 1920',
    name: 'Sókrates IDR',
    subtitle: 'AI Research and Drafting for Icelandic Law',
    techStack: 'Python/FastAPI, React/TypeScript, PostgreSQL, Neo4j, MinIO, PGVector, Celery',
    description:
      'I built a research and drafting workspace that connects Icelandic judgments, statutes and regulations down to the ruling or article cited.',
    longDescription:
      'I built Sókrates IDR solo in 2025 as a working research and drafting platform for Icelandic law. Its knowledge graph connects tens of thousands of verdicts from every level of the judiciary, including Hæstiréttur (Supreme Court) rulings back to 1920, with the entire body of statute law and most regulations. From a citation in a verdict, you can follow the link directly to the ruling or article it cites.',
    highlights: [
      'I indexed laws by chapter, article and sub-article so a citation can point to the precise provision.',
      'I indexed each verdict by its component sections, from Reifun and Inngangur through Ágreiningsefni, Málsatvik, Málsástæður and Löggjöf (reasoning) to Niðurstaða.',
      'I built a persistent personal workspace with drafting templates and a word processor. The research agent can follow what you are writing in near real time and consult the same graph from inside the draft.',
    ],
    metrics: [
      { stat: '4', text: 'Persistence backends (PostgreSQL, Neo4j, MinIO, PGVector)' },
      { stat: '13+', text: 'OpenTelemetry instrumentations for full observability' },
      { stat: 'E2E', text: 'Playwright tests from login to document' },
    ],
    architectureNotes: [
      'DDD with architectural boundaries enforced by import-linter contracts (not just convention): domain → core → infrastructure → api. Repository pattern with protocol-based interfaces. Dependency injection throughout (dependency-injector)',
      'Polyglot persistence: PostgreSQL (asyncpg + SQLAlchemy + Alembic migrations), Neo4j (knowledge graph), MinIO (S3-compatible document storage), PGVector (embeddings)',
      'OpenTelemetry with 13+ instrumentations: FastAPI, Starlette, ASGI, asyncpg, SQLAlchemy, httpx, requests, aiohttp, Celery, gRPC, Jinja2. Logfire + Sentry + structlog',
      'Comprehensive testing: pytest-asyncio, factory-boy, freezegun, Playwright E2E. Automatic TypeScript client generation from OpenAPI specs via Orval',
      'JWT/bcrypt authentication, Celery distributed task queues, Docker multi-stage builds, GitHub Actions CI/CD',
    ],
  },
  {
    slug: 'autopod',
    keyDimension: '3 subtitle languages',
    name: 'Autopod',
    subtitle: 'Multi-Tenant Podcast Orchestrator',
    techStack: 'Go, Python/FastAPI, SQLite, Docker, Cloudflare R2/Tunnel',
    description:
      'I built a multi-tenant production system that publishes a video to YouTube, Spotify and Apple Podcasts with subtitles in English, Icelandic and Polish, a summary, tags and hashtags, and clips of the most quotable moments.',
    longDescription:
      'A multi-tenant podcast automation system built with a Go control plane driving a Python/FastAPI data plane. Handles the full pipeline from audio extraction through transcription, subtitles in English, Icelandic and Polish, summaries, tags and hashtags, extraction of the most quotable clips, thumbnail creation, and multi-platform upload — all with crash-resilient state management and per-customer isolation enforced by directory structure and encryption boundaries.',
    highlights: [
      'Control plane / data plane split: Go orchestrator drives a 7-step pipeline by calling stateless Python/FastAPI endpoints with typed HTTP contracts mirrored across languages',
      'Crash-resilient job state machine with SQLite persistence — every state transition writes to disk before proceeding, GetActiveJobs() resumes all in-flight jobs on startup',
      'Multi-tenancy by construction: per-customer watch directories, age-encrypted secrets decrypted at runtime, namespaced cloud storage on Cloudflare R2',
      '21 Go tests + 36 Python tests, GitHub Actions CI with -race flag, Docker multi-stage builds',
    ],
    metrics: [
      { stat: '7-step', text: 'Automated pipeline from ingestion to multi-platform publish' },
      { stat: '57', text: 'Combined Go + Python tests with race detection' },
      { stat: '2-lang', text: 'Typed HTTP contracts mirrored across Go and Python' },
    ],
    architectureNotes: [
      'Goroutine semaphore (chan struct{}, capacity 2) with mutex-protected file map preventing watcher re-triggering on pipeline-generated outputs',
      'File stability detection polls size every 2s until stable (30s timeout) to handle large Google Drive sync uploads',
      'Idiomatic Go: internal/ package layout, sql.NullString, table-driven tests, httptest.NewServer for contract verification, error wrapping with %w',
      'OAuth consent flow → token capture → age encrypt → save. Stale flow pruning (10-min TTL)',
      'AI-powered error recovery: ffprobe analysis → Gemini diagnosis → suggested ffmpeg fix → validated execution',
      'Systemd timer for Google Drive sync with randomized delay (thundering herd prevention)',
    ],
    githubUrl: 'https://github.com/RationallyPrime/autopod',
    githubLabel: 'Private',
  },
  {
    slug: 'sokrates',
    name: 'Sókrates',
    subtitle: 'An On-Premises AI Department',
    techStack: 'Python, pydantic-ai, FastAPI, DBOS, Postgres, DuckDB/DuckLake, Logica, Logfire, MCP, NixOS, SvelteKit',
    description:
      'An on-premises AI department in one NixOS appliance: named agents do back-office work under executable rules, and a human consents before anything leaves the box.',
    longDescription:
      "Sókrates ships as a single NixOS appliance on the customer's premises. It ingests the company's existing systems, keeps a governed knowledge graph of the business, and lets named agents do back-office work over Slack, Teams, WhatsApp and email. It comes in two editions: a mini-PC that routes inference through a gateway, and a DGX Spark that runs every model locally for air-gapped customers. Correctness lives in the architecture rather than in the prompt: rules are executable logic, every external action is durable and consented, and every action an agent takes is traced.",
    highlights: [
      'One appliance: a 14-service stack across five credential-isolated containers, each holding at most one kind of customer credential.',
      'Universal schema connector: OpenAPI, JSON Schema, GraphQL and SQL DDL compiled into typed Pydantic models and served to agents as MCP tools.',
      'Rules as executable logic: business rules are Logica laws compiled to DuckDB SQL, and each returns the set of violations rather than a pass/fail.',
      'Evaluated like software: agent behaviour is tested against invariants over live systems (typed output, a selection from the valid set, the shape of the span tree) rather than string matching.',
    ],
    metrics: [
      { stat: '254', text: 'ratified IFRS law primitives; 245 compile and run against their expected violations in CI' },
      { stat: '14', text: 'services in five credential-isolated containers on one appliance' },
      { stat: '47', text: 'numbered architecture invariants, 27 of them enforced mechanically in CI' },
      { stat: '16', text: 'packages in a nine-layer dependency graph, boundaries enforced by import-linter and tach' },
      { stat: '4', text: 'schema languages compiled into agent tools: OpenAPI, JSON Schema, GraphQL and SQL DDL' },
      { stat: '2', text: 'editions: a gateway-routed mini-PC, or fully local inference on a DGX Spark' },
    ],
    architectureNotes: [
      'Durable execution: external actions run as DBOS workflows with write-ahead attempt records, so a crash never repeats an action against a customer system.',
      'Consent: every governed write carries an HMAC-signed consent token. Agents propose; a human approves anything that leaves the box.',
      "Observability as identity: a governed act's identity is its trace span, and spans are mirrored into a DuckLake lakehouse on the box for audit queries, with no data leaving the premises.",
      'Model independence: model identity is injected by configuration, so models can be swapped and compared on real workloads without code changes.',
      'Architecture as law: a registry of numbered invariants and a layered package graph, enforced in CI by import-linter and tach.',
    ],
  },
  {
    slug: 'krepis',
    name: 'Krepis',
    subtitle: 'Back-Office Software Designed for AI Agents',
    techStack: 'Python, Pydantic, Postgres, Event sourcing, Logica, FastAPI, OpenAPI',
    description:
      'I built seven back-office kernels for accounting, payroll, workforce management and related work. Six ran a simulated Reykjavík guesthouse for a full month without human intervention.',
    longDescription:
      'I tested Krepis on Northlight House, a simulated twelve-person guesthouse in Reykjavík. Six kernels ran September 2026 in one process on PostgreSQL with no human in the loop. They handled 180 shifts, payroll under the guesthouse’s invented test policies, two supplier deliveries, the stock close, 14 payments and the books.',
    highlights: [
      'The check was blind and involved three parties. The first wrote the source facts and calculated the expected results by hand, then froze both on 2 October before the software ran. The second operated Krepis without seeing the answers. The third compared the output with the frozen figures.',
      'The first run on 2 October overstated gross pay by 42,000 ISK. A night shift that started on 30 September crossed midnight into October. I fixed five product gaps and reran the same facts on 3 October. All 4,913 comparisons matched the original expected results.',
      'Seven kernels: double-entry accounting, payroll, workforce management, money movement, inventory, commitments and a work ledger.',
      'Event-sourced and append-only: balances are computed from the log rather than stored, so every number traces back to the events behind it.',
      'Safe for agents by construction: every action is idempotent and has a dry run, so an agent can preview any effect and retry without doubling it.',
      'Rules as logic: business policy is expressed as Logica predicates above the kernels, so it can change without touching kernel code.',
    ],
    metrics: [
      { stat: '4,913', text: 'comparisons against results calculated and frozen before the first run. Zero differences on 3 October 2026.' },
      { stat: '4,125,040', text: 'ISK gross payroll for 12 employees, exact to the króna' },
      { stat: '14', text: 'payments settled (4,835,120 ISK), each matching its source amount, into a 27-transaction ledger with zero unbalanced entries' },
      { stat: '30/30', text: 'stored records identical after a restart; replayed handoffs and duplicate submissions created no new effects' },
    ],
    architectureNotes: [
      'One family: kernels couple through a shared core, never by importing each other, and every kernel must pass the same conformance suite.',
      'Safe to hand to an agent: of the 330 calls the operating agent made, the kernels rejected 11 invalid ones (2 deliberate probes, such as an overlapping shift and a journal off by 1 ISK, and 9 ordinary agent slips) and wrote nothing for any of them.',
      'One Postgres: a schema per kernel, mirrored into a lakehouse for analytics.',
      "Contracts for agents: each kernel publishes its OpenAPI contract, which Sókrates compiles into the agents' tools.",
    ],
    url: 'https://claude.ai/artifact/2s9dS11CxGsqxFBVUG3Akr',
    urlLabel: 'Original case file on Claude',
    caseFile: '/case-files/northlight-house-september-2026.html',
  },
  {
    slug: 'the-weave',
    name: 'The Weave',
    subtitle: 'An Engineering Organisation Staffed by AI Agents',
    techStack: 'Claude, Codex, TypeScript, Bun, Slack, Linear, GitHub Actions, Tailscale',
    description:
      'I built and run an engineering team of five AI agents. Each has its own machine and role. Together they plan, write, review, repair and merge production software.',
    longDescription:
      'I built the Weave to run the engineering cycle from ticket to merge. I set the architecture and standards, wrote the operating procedures and built the scheduler that assigns work to Claude and Codex. Across my repositories I merged 1,742 pull requests between March and October 2026. From July to mid-September the team averaged 106 merged changes a week. A second agent reviews every code change before merge. Reviewers found issues in 83% of the changes they reviewed, and 0.14% of merged changes were reverted.',
    highlights: [
      'When a reviewer finds an issue, the author repairs it and sends the changed code back through review before it can merge.',
      'Capacity-aware scheduling: work is routed by remaining subscription capacity, skills, availability and parallelism, turning AI subscriptions into reviewed production software at an average of 250 ISK ($2) per merged change.',
      "Mistakes become procedure: a daily harvest turns what reviewers catch into 40 standard operating procedures holding 414 recorded lessons, which every agent loads before it touches the code they govern. The team's expertise compounds instead of resetting with each session.",
      'Event-driven wake fabric: a self-built broker with outbound-only edges over Tailscale wakes the right agent on the right machine from Slack, Linear and GitHub events.',
    ],
    metrics: [
      { stat: '106/week', text: 'Merged changes, July to mid-September 2026' },
      { stat: 'Every code change', text: 'Reviewed by a second agent before merge' },
      { stat: '250 ISK', text: 'Subscription cost per merged change' },
    ],
    architectureNotes: [
      'Delivery ledger: the broker records every wake in a SQLite ledger, so a missed or duplicated delivery is visible rather than silent.',
      "Usage telemetry: per-agent collectors report remaining subscription capacity, which feeds the scheduler's view of who can take the next task.",
      'Linear as the ledger: a ticket marked ready for an agent wakes the team, and an agent claims it by assigning itself.',
      'Review is measured too: findings are graded by severity, and a finding that recurs at the same line across review rounds is tracked as a repair that did not stick.',
    ],
  },
  {
    slug: 'memory-palace',
    name: 'Memory Palace',
    subtitle: 'Graph-Based Semantic Memory System',
    techStack: 'Python/FastAPI, Neo4j, Voyage AI, OAuth, Cloudflare Tunnel, MCP',
    description:
      "Long-term memory for language models, in daily use as Claude's persistent memory since 2025. Query language design, graph databases and the specification pattern, all learned from scratch for this build.",
    longDescription:
      'A graph-based semantic memory system that stores, relates, and retrieves knowledge using Neo4j and vector embeddings. Features a custom query language built on the discriminated union specification pattern, a type-safe Cypher query builder with compile-time validation, and integration as an MCP server so Claude.ai can use it as persistent external memory.',
    highlights: [
      'Clean architecture with enforced layer boundaries: domain → infrastructure → services → api. Protocol-based interfaces for all external integrations',
      'Extensible query API using discriminated union specification pattern: 12+ composable spec types generating both Python predicates and Cypher WHERE clauses',
      'Type-safe Cypher query builder with state machine validating clause ordering at construction time',
      'Integrated as MCP server enabling Claude.ai to use the system as persistent external memory',
    ],
    metrics: [
      { stat: '12+', text: 'Composable specification types in the query DSL' },
      { stat: '4-layer', text: 'Clean architecture with enforced boundaries' },
      { stat: 'MCP', text: 'Integrated as Claude.ai external memory server' },
    ],
    architectureNotes: [
      'Discriminated union specification pattern: MemorySpecification is an Annotated union composable via .and_(), .or_(), .not_(). Each spec generates both Python predicates and Cypher WHERE clauses',
      'Type-safe Cypher query builder with state machine validating clause ordering at construction time. LiteralString typing throughout for injection safety',
      'Circuit breaker (CLOSED → OPEN → HALF_OPEN) with exponential backoff for Voyage AI embedding calls. Proper error classification (rate limit → retryable, auth → not)',
      'Typed error architecture: ApplicationError base with ErrorCode enum, ErrorLevel, typed ErrorDetails models. @with_error_handling decorator with configurable reraise behavior',
      'Event-driven background processing: DreamJobOrchestrator runs scheduled jobs including salience decay (configurable half-life), DBSCAN topic clustering, and re-indexing',
    ],
    githubUrl: 'https://github.com/Skrates/found-family',
    githubLabel: 'Public',
  },
  {
    slug: 'grimoire',
    name: 'Grimoire (SETS)',
    subtitle: 'Enterprise Knowledge Management Platform',
    techStack: 'Python/FastAPI, Neo4j AuraDB, Azure Container Apps, Bicep IaC, OAuth 2.0, MCP',
    description:
      'Enterprise evolution of Memory Palace, deployed on Azure at Wise. Same architectural DNA evolved for cloud infrastructure ownership and team-scale deployment.',
    longDescription:
      'The enterprise evolution of Memory Palace, deployed on Azure at Wise. Inherits the same specification-pattern core and Neo4j graph backend, but adds full Azure infrastructure ownership (Bicep IaC, Container Apps, auto-scaling), three-RFC OAuth 2.0 authentication, and a pluggable connector architecture for Confluence, GitHub, and code complexity analysis — all queryable through a unified JSON DSL.',
    highlights: [
      'Deployed on Azure Container Apps with Bicep IaC: Neo4j AuraDB, Azure Container Registry, auto-scaling (scale-to-zero dev, 1–3 replicas prod)',
      'Full OAuth 2.0 authentication spanning three RFCs (7591, 8414, 9728) — Claude.ai MCP connector auto-negotiates auth, zero-config enterprise deployment',
      'Pluggable connector architecture: Confluence space indexing, GitHub repo analysis, code complexity metrics — all queryable through unified specification-based JSON DSL',
      'Enterprise features: JWT identity tracking, background job orchestration with APScheduler, liveness/readiness health probes',
    ],
    metrics: [
      { stat: '3 RFCs', text: 'Full OAuth 2.0 stack (7591, 8414, 9728)' },
      { stat: '0→3', text: 'Auto-scaling replicas with scale-to-zero dev' },
      { stat: 'IaC', text: 'Full Azure infrastructure as Bicep code' },
    ],
    architectureNotes: [
      'Azure Container Apps with Bicep IaC: Neo4j AuraDB for graph + vector search, Azure Container Registry, Log Analytics workspace, CI/CD via GitHub Actions with smoke test (MCP discovery endpoint validation)',
      'Dynamic Client Registration (RFC 7591), Authorization Server Metadata (RFC 8414), Protected Resource Metadata (RFC 9728). Domain-restricted email (@wise.is) — zero-config enterprise deployment',
      'Pluggable connector architecture: Confluence (space indexing, semantic page search with label/space filtering), GitHub repositories (clone → language detection → embedding generation → graph storage), code complexity analysis (Halstead, cyclomatic, cognitive)',
      'Same specification core evolved: 12+ discriminated union types generating type-safe Cypher, composable queries with similarity search, relationship traversal, and pagination in a single endpoint',
      'Multi-stage Docker builds with non-root users, liveness/readiness health probes, JWT identity tracking for audit trails',
    ],
  },
  {
    slug: 'hive',
    name: 'Hive',
    subtitle: 'Coordination for Agents. Attention for a Human',
    techStack: 'TypeScript, Bun, SQLite, Slack Block Kit, Claude, Codex, Tailscale',
    description: 'The coordination fabric behind the Weave: agents ask for a decision in Slack, and the answer returns to the work that needs it, with its context attached.',
    longDescription: 'A team of AI agents can work in parallel. A human cannot give every thread attention at once. Hive connects the Weave’s agents across machines and turns the moments that need my judgement into a focused queue. Hive Attention brings the brief into Slack, records my response and returns it to the originating work context.',
    highlights: [
      'A live Slack demonstration connected a structured intervention card, a human decision and an agent continuation with the saved work context.',
      'An agent can finish its turn while a question waits. The human takes the next intervention when ready; the queue does not switch projects on its own.',
      'The same broker coordinates ordinary agent handoffs and attention returns, with durable delivery records and visible outcomes.',
    ],
    githubUrl: 'https://github.com/Skrates/hive',
  },
]

// Detail letters are shared by the cover index and the project sheets.
export const projectLetter = (index: number) => String.fromCharCode(65 + index)

export const selectedProjects = featuredProjects.filter((project) => project.keyDimension)

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  description: string
  keyResult: string
  highlights?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Founder & Lead Engineer',
    company: 'Krates ehf.',
    period: 'Mar 2026 — Oct 2026',
    keyResult: 'Verified a guesthouse’s books and payroll against 4,913 expected figures with zero differences',
    description:
      'Designed and built back-office software that AI agents operate, and the engineering organisation that produces it. Build complete and verified; the company is on hold while I work full time.',
    highlights: [
      'Built and ran the Weave, my engineering team of five AI agents. From July to mid-September 2026 it averaged 106 merged changes a week at 250 ISK ($2) each. Just 0.14% of merged changes were reverted.',
      'Designed its quality system. A second agent reviews every code change before merge and found issues in 83% of the changes reviewed. I use those findings to maintain 40 standing procedures holding 414 lessons.',
      'Built seven back-office kernels. Six ran the September books, payroll and stock of Northlight House, a simulated twelve-person guesthouse in Reykjavík, with 180 shifts, 14 payments and no human in the loop. A blind three-party check matched all 4,913 expected figures.',
      'Built Sókrates, an on-premises appliance that connects a company’s existing systems to those agents. Every external action is crash-safe, approved by a human and logged.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Wise lausnir (Microsoft Dynamics partner)',
    period: 'Oct 2024 — Mar 2026',
    keyResult: 'Cut municipal onboarding into Fabric/OneLake from about three weeks to half a workday',
    description: 'Microsoft Dynamics partner.',
    highlights: [
      'Designed and deployed Grimoire on Azure to give Claude access to the company’s Confluence, GitHub and code-analysis knowledge. Rolled it out to every technical employee through Claude Team admin. Colleagues sign in with their company email and have nothing to install.',
      'Cut municipal onboarding from legacy on-premises systems into Fabric/OneLake from about three weeks to half a workday. Built the self-healing ETL framework for the Business Central solution using PySpark, a medallion architecture and models generated from OpenAPI schemas.',
    ],
  },
  {
    role: 'Data Scientist & Business Intelligence Lead',
    company: 'Travelshift',
    period: 'Aug 2022 — Sep 2024',
    keyResult: 'Forecast 2.4B ISK of cash flow six months out with a 0.42% margin of error',
    description:
      "Rebuilt the data infrastructure and the financial automation of Iceland's largest travel marketplace.",
    highlights: [
      'Built a cash-flow forecasting model with a 0.42% margin of error on 2.4B ISK of volume over a six-month horizon.',
      'Automated payment reconciliation across Adyen, Teya and internal systems. Unreconcilable transactions fell from 1 in 35 to under 1 in 1,000.',
      'Built the data platform with a Kimball star schema in Snowflake, ETL across internal and external systems, and Power BI reporting.',
      'Reduced the booking department from seven contractors to two while improving its performance. Started with no finance background and within months was producing annual reports that passed audit.',
    ],
  },
  {
    role: 'Data Analyst & Product Owner',
    company: 'Alfreð Atvinnuleit',
    period: 'May 2021 — Aug 2022',
    keyResult: 'Wrote the grant proposal that secured 30M ISK from Rannís',
    description:
      'Owned the Giggó gig-economy platform as product owner, including its system architecture and data model. Built the BI environment with real-time dashboards.',
    highlights: [
      'Wrote the grant proposal that secured 30M ISK from Rannís.',
    ],
  },
  {
    role: 'Instructor, Department of Computer Science',
    company: 'Reykjavík University',
    period: '2018 — 2021',
    keyResult: 'Taught programming, data structures, calculus and statistics',
    description:
      'Taught while completing MSc: Programming, Data Structures, Calculus & Statistics, Discrete Mathematics II.',
  },
  {
    role: 'Statistician & Bioinformatician',
    company: 'deCODE Genetics (Amgen)',
    period: '2015 — 2017',
    keyResult: 'Haplotype compression more than 10× better than gzip',
    description:
      'Designed novel haplotype compression algorithm achieving >10× compression ratio versus gzip — enabled loading entire chromosomes into memory. Processed and analyzed large genetic datasets.',
  },
]

export interface StatEntry {
  stat: string
  text: string
}

export const stats: StatEntry[] = [
  { stat: '0.42%', text: 'Forecast error on 2.4B ISK of cash flow, six months out' },
  { stat: '>10×', text: 'Compression ratio vs gzip for haplotype data' },
  { stat: '97%', text: 'Fewer unreconcilable payment transactions' },
  { stat: '7 → 2', text: 'Booking contractors, with better performance' },
]

export interface SkillCategory {
  name: string
  items: string
  iconName: string
}

export const skills: SkillCategory[] = [
  {
    name: 'AI & agents',
    items: 'pydantic-ai, MCP, Anthropic/OpenAI/Gemini APIs, agent evaluation, RAG and embeddings, durable agent workflows (DBOS), multi-agent engineering teams, local inference, video diffusion models',
    iconName: 'sparkles',
  },
  {
    name: 'Languages',
    items: 'Python (expert), SQL, TypeScript, Swift, Go, R, Logica',
    iconName: 'code-square',
  },
  {
    name: 'Backend & APIs',
    items: 'FastAPI, Pydantic, OpenAPI, typed client generation, OAuth 2.0 (RFC 7591/8414/9728), event sourcing, idempotent and replayable APIs',
    iconName: 'cpu',
  },
  {
    name: 'Data',
    items: 'Postgres, DuckDB/DuckLake, Snowflake, Neo4j, Microsoft Fabric/PySpark, Kimball modelling, Power BI, forecasting',
    iconName: 'chart-bar',
  },
  {
    name: 'Infrastructure',
    items: 'NixOS, Docker, Azure (Container Apps, Bicep), AWS, Cloudflare, Tailscale, RunPod, GitHub Actions with self-hosted runners',
    iconName: 'cloud',
  },
  {
    name: 'Engineering & observability',
    items: 'Domain-driven design, architecture enforced in CI (import-linter, tach), typed error hierarchies, Logfire/OpenTelemetry, uv/ruff/ty',
    iconName: 'chart-line',
  },
]

export interface Education {
  degree: string
  school: string
  period: string
  focus: string
}

export const education: Education[] = [
  {
    degree: 'MSc Computer Science',
    school: 'Reykjavík University',
    period: '2017 — 2021',
    focus: 'Artificial Intelligence and Data Science. Thesis: Recommendation Systems.',
  },
  {
    degree: 'BSc Mathematics',
    school: 'University of Iceland',
    period: '2011 — 2016',
    focus: 'Computational Mathematics and Computer Science.',
  },
]

// Copy for the home page's sheets. Figures are the measured ones on the CV.
export const sheetCopy = {
  krates: {
    lede: 'From March to October 2026 I designed and built back-office software for accounting, payroll and operations. I built its business rules as executable logic and put human approval on every external action.',
    revision: {
      rev: portfolioRevision,
      description: 'Build complete and verified. The company is on hold while Hákon works full time.',
    },
    widthDim: { value: '14', label: 'services in five credential-isolated containers' },
    heightDim: { value: '7', label: 'agent-first kernels' },
    sokrates: 'The on-premises AI department: one NixOS appliance that ingests a company’s systems and lets named agents do back-office work over Slack, Teams, WhatsApp and email.',
    krepis: 'Seven back-office kernels (accounting, payroll, workforce management and more) built for AI agents rather than for people clicking through screens.',
    notes: [
      'I tested six Krepis kernels on Northlight House, a simulated twelve-person guesthouse in Reykjavík. They ran September’s 180 shifts, payroll, stock, 14 payments and the books without human intervention. A blind three-party check found zero differences across 4,913 comparisons. The kernels rejected 11 invalid calls and wrote nothing for any of them.',
      'Business rules are Logica laws compiled to DuckDB SQL; each returns the set of violations, not a pass or fail.',
      'An agent that dies mid-task never repeats an external action (DBOS, write-ahead attempt records).',
      'Every governed action carries a signed consent token and is its own trace span in a queryable audit store.',
      'Krepis kernels are event-sourced and append-only; every action is idempotent and has a dry run.',
      'Two editions: a gateway-routed mini-PC, or fully local inference on a DGX Spark for air-gapped sites.',
    ],
  },
  weave: {
    lede: 'I built and run an engineering team of five named AI agents. I set the architecture and operating standards, and give each agent its own machine and role. Across my repositories I merged 1,742 pull requests between March and October 2026.',
    topDim: { value: '106', label: 'merged changes a week, July to mid-September 2026' },
    sideDim: { value: 'Every', label: 'code change reviewed by a second agent before merge' },
    bottomDim: { value: '250 ISK', label: '($2) of AI subscription per merged change' },
    caption: 'Reviews always come from an agent other than the author. Repairs go back through review before the merge gate.',
    notes: [
      'Reviewers found issues in 83% of the changes they reviewed, and only 0.14% of merged changes have ever been reverted.',
      'A scheduler I built gives each task to the agent best placed to take it, by remaining subscription capacity, skills, availability and parallelism.',
      'Mistakes become procedure: a daily harvest turns what reviewers catch into 40 standard operating procedures holding 414 recorded lessons.',
      'A self-built broker with outbound-only edges over Tailscale wakes the right agent on the right machine from Slack, Linear and GitHub.',
    ],
  },
  films: {
    dim: { value: '60.4 s', label: 'one continuous take with sound, in one pass under 50 GB of GPU memory' },
    notes: [
      'I replaced averaging at the join with a one-way hand-over between windows. Measured overlap flicker fell from 0.49 to 0.03.',
      'I used the same hand-over for audio and recovered the first two seconds of dialogue in a line that started at the join.',
      'I use H3Forge for Homegrown Hero Films. I check the footage for story and continuity, then upscale and interpolate each shot separately to 60 fps.',
    ],
  },
  conceptstudio: {
    lede: 'I built a native Mac app for making AI video. It captions your photos or clips, rents a GPU within budget and brings back a trained adapter. Its Shots workspace lets you place the cast and camera on a 3D stage, then export the shot to MiniMax H3 in ComfyUI.',
    topDim: { value: '9', label: 'screens, from a folder of photos to a trained adapter' },
    sideDim: { value: '26', label: 'trainable models in one shared table' },
    bottomDim: { value: 'US$3.99', label: 'of rented GPU for a 10,004-step run through the app (14 October 2026)' },
    caption: 'The Mac does the preparation; a GPU computer the app rents and controls does the training, inside the budget and idle limit set before renting.',
    notes: [
      'In Shots, perspective lines drawn on a location photo solve the camera lens, tilt and roll. A full 124-frame export took 1.64 seconds on an M4 Mac.',
      'One model table, two readers: the app builds its pickers and limits from it, and my GPU images write the trainer’s configuration from the same file.',
      'Captions are shaped for the model being trained by a swappable Agent Skill, written by any language model chosen at run time.',
      'Rented computers run my own container images; the app starts services from a fixed catalogue over one authenticated API, never from shell strings.',
      'A likeness adapter on Qwen-Image-2.1 went from 0.05 to 0.34 face match to held-out photos in 2,500 steps (15 October 2026).',
    ],
  },
}


export const hiveStory = {
  home: {
    title: 'Hive',
    description: 'The coordination fabric behind the Weave. Hive Attention brings a decision into Slack and returns the answer to the agent’s work context.',
  },
  loop: [
    { title: 'Agent work', detail: 'A concrete decision needs a human.' },
    { title: 'Human attention', detail: 'Read the brief. Record the response.' },
    { title: 'Agent work', detail: 'Restore context. Apply the decision.' },
  ],
  intervention: {
    title: 'Keep the attention queue current',
    action: 'Approve one focused repair and an independent review.',
    context: 'A deleted Slack card must stay retired. The Home queue must still reflect later changes to that intervention.',
    unblocks: 'The engineer can repair the queue refresh; a different agent can verify the result.',
    response: 'Proceed with the focused repair and independent review.',
  },
  steps: [
    { title: 'Queue the ask', status: 'Queued', surface: 'Intervention brief', explanation: 'The agent binds the intervention to its work and saves a complete brief: the action requested, the context, the artifacts and what the answer will unblock. Its current turn can end.' },
    { title: 'Display in Slack', status: 'Waiting for attention', surface: 'Slack direct-message card', explanation: 'Hive renders the brief as native Slack blocks. One direct-message card announces the intervention; later changes update that card. The app’s Home tab gathers the queue. Displaying an item does not make it active.' },
    { title: 'Record a response', status: 'Active intervention', surface: 'Slack decision modal', explanation: 'Take next selects the oldest eligible intervention and opens its decision modal. The human can resolve, defer or cancel it. Answer this one is an explicit, recorded override. Only one intervention can be active.' },
    { title: 'Return to context', status: 'Response recorded · return in flight', surface: 'Agent continuation', explanation: 'The response and the intent to return commit together. Ordinary Hive delivery carries the verbatim answer and the saved packet to the originating work context. Recording a response and delivering it are separate events.' },
    { title: 'Report the outcome', status: 'Return processed · outcome reported', surface: 'Delivery outcome', explanation: 'The receiving agent restores the right repository, work and artifacts, acts within its existing permissions, and reports an outcome. Processed means an outcome was reported. The work still needs its own verification, review and publication.' },
  ],
  coordination: [
    { title: 'Conversation', text: 'Slack is where the team discusses work. Hive routes an explicit handoff to the named agent, across machines and model providers.' },
    { title: 'Work and decisions', text: 'Linear holds the durable work ledger. Git holds the code. Hive carries the deliveries between the people, agents and tools that move that work forward.' },
    { title: 'Human judgement', text: 'A product choice, a visual selection or a blocker that no peer can resolve becomes a concrete intervention. Routine progress and peer review stay with the team.' },
  ],
  returns: [
    { title: 'Return to the captured session', label: 'Same session, where supported', text: 'Hive captures the session and its working directory, then checks both again before delivery. If that route becomes unavailable, it fails visibly and needs an explicit reroute.' },
    { title: 'Return with the work packet', label: 'Fresh turn, restored work context', text: 'A new turn receives the saved project, work, artifacts and human response. The agent must restore that context before acting. This is the mode used in the recovered live demonstration.' },
  ],
  evidence: [
    { title: 'Demonstrated on the live fleet', text: 'The command-line pilot on 15 October 2026 proved the queue and return path. A real engineering intervention then followed the Slack selection and response path early on 16 October: the saved response returned to Ariadne, the delivery reported an outcome, and the card’s stored state reflected the processed return.' },
    { title: 'Implemented in the public repository', text: 'The durable queue, source binding and return paths are implemented. The Slack extension renders direct-message cards, the app Home queue and decision modals using native Slack components. The Home queue, defer and cancel controls are implemented; the recovered live record does not establish a separate demonstration of each control.' },
    { title: 'The wider design', text: 'The Attention specification defines explicit switching, durable commands, revision checks and visible return failures. Priority scheduling, calendar projection, focus inference and autonomous approvals remain outside this release. Returning into every desktop agent chat is not demonstrated; the specification leaves the Mac desktop delivery path for later work.' },
  ],
  sources: [
    { title: 'Hive repository', description: 'The coordination service and its operating model.', href: 'https://github.com/Skrates/hive' },
    { title: 'Hive Attention specification', description: 'The queue, return contract and Slack amendment.', href: 'https://github.com/Skrates/hive/blob/main/docs/adr/0004-human-attention-queue.md' },
    { title: 'Slack implementation', description: 'Native blocks, Home queue and decision modal.', href: 'https://github.com/Skrates/hive/blob/main/src/attention/slack.ts' },
    { title: 'Context return implementation', description: 'Response delivery and the meaning of processed.', href: 'https://github.com/Skrates/hive/blob/main/src/attention/returns.ts' },
    { title: 'Slack extension history', description: 'The implemented change and its review history.', href: 'https://github.com/Skrates/hive/pull/93' },
  ],
}
