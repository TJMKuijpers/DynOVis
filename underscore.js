





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" integrity="sha256-gaWb8m2IHSkoZnT23u/necREOC//MiCFtQukVUYMyuU=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-cc9de0e8eacc2e4692137e919b3627e9d539401c99d4e78b4a344c5fe153899a.css" integrity="sha256-zJ3g6OrMLkaSE36RmzYn6dU5QByZ1OeLSjRMX+FTiZo=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0047c348443848937ad9891b690c4acb6ee0d96263d91e9b1725194e65869e91.css" integrity="sha256-AEfDSEQ4SJN62YkbaQxKy27g2WJj2R6bFyUZTmWGnpE=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>underscore/underscore.js at master · jashkenas/underscore · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/4732?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jashkenas/underscore" property="og:title" /><meta content="https://github.com/jashkenas/underscore" property="og:url" /><meta content="underscore - JavaScript&#39;s utility _ belt" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="F7B4:15873:5875592:83F6956:5923F6BA" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F7B4:15873:5875592:83F6956:5923F6BA" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MmVhMjJiMmJlYTgxZTgyNDgxMjZhMmRiMWMxYWI2YjAzMjQzMGQ5ZGQ0YzA1MjYwMjk2NzQyZmViZGQwYWE0Znx7InJlbW90ZV9hZGRyZXNzIjoiMTM3LjEyMC4xODMuMTE1IiwicmVxdWVzdF9pZCI6IkY3QjQ6MTU4NzM6NTg3NTU5Mjo4M0Y2OTU2OjU5MjNGNkJBIiwidGltZXN0YW1wIjoxNDk1NTI5MTQ2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="07fe785f5a2e18f80d67eceddf6e724457118e20">

  <meta http-equiv="x-pjax-version" content="e5b0cc3077c9d4712506cc203fb9680d">
  

    
  <meta name="description" content="underscore - JavaScript&#39;s utility _ belt">
  <meta name="go-import" content="github.com/jashkenas/underscore git https://github.com/jashkenas/underscore.git">

  <meta content="4732" name="octolytics-dimension-user_id" /><meta content="jashkenas" name="octolytics-dimension-user_login" /><meta content="349241" name="octolytics-dimension-repository_id" /><meta content="jashkenas/underscore" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="349241" name="octolytics-dimension-repository_network_root_id" /><meta content="jashkenas/underscore" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jashkenas/underscore/commits/master.atom" rel="alternate" title="Recent Commits to underscore:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/jashkenas/underscore/blob/master/underscore.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>            <a href="/marketplace" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
              Marketplace
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/jashkenas/underscore/search" class="js-site-search-form" data-scoped-search-url="/jashkenas/underscore/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/jashkenas/underscore/blob/master/underscore.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fjashkenas%2Funderscore%2Fblob%2Fmaster%2Funderscore.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fjashkenas%2Funderscore"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/jashkenas/underscore/watchers"
     aria-label="880 users are watching this repository">
    880
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjashkenas%2Funderscore"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/jashkenas/underscore/stargazers"
      aria-label="20679 users starred this repository">
      20,679
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjashkenas%2Funderscore"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/jashkenas/underscore/network" class="social-count"
       aria-label="4667 users forked this repository">
      4,667
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/jashkenas" class="url fn" rel="author">jashkenas</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jashkenas/underscore" data-pjax="#js-repo-pjax-container">underscore</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jashkenas/underscore" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jashkenas/underscore" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jashkenas/underscore/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jashkenas/underscore/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">47</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jashkenas/underscore/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jashkenas/underscore/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">44</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/jashkenas/underscore/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /jashkenas/underscore/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/jashkenas/underscore/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jashkenas/underscore/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/jashkenas/underscore/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/jashkenas/underscore/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/jashkenas/underscore/blob/d4f52aa6966b096512d57ee553b3d9355cc5b49e/underscore.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:63e7fc2b097f665d95f22533a617bb81 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/CoC-moderation/underscore.js"
               data-name="CoC-moderation"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                CoC-moderation
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/GH-2253/underscore.js"
               data-name="GH-2253"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                GH-2253
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/async/underscore.js"
               data-name="async"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                async
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/gh-pages/underscore.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/karma-ie/underscore.js"
               data-name="karma-ie"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                karma-ie
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jashkenas/underscore/blob/master/underscore.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jashkenas/underscore/blob/v1.9.0/underscore.js"
               data-name="v1.9.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v1.9.0
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.8.3/underscore.js"
              data-name="1.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.3">
                1.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.8.2/underscore.js"
              data-name="1.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.2">
                1.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.8.1/underscore.js"
              data-name="1.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.1">
                1.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.8.0/underscore.js"
              data-name="1.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.0">
                1.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.7.0/underscore.js"
              data-name="1.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.0">
                1.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.6.0/underscore.js"
              data-name="1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.0">
                1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.5.2/underscore.js"
              data-name="1.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.2">
                1.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.5.1/underscore.js"
              data-name="1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.1">
                1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.5.0/underscore.js"
              data-name="1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.0">
                1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.4.4/underscore.js"
              data-name="1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4">
                1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.4.3/underscore.js"
              data-name="1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.3">
                1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.4.2/underscore.js"
              data-name="1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.2">
                1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.4.1/underscore.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.4.0/underscore.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.3.3/underscore.js"
              data-name="1.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.3">
                1.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.3.2/underscore.js"
              data-name="1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.2">
                1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.3.1/underscore.js"
              data-name="1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.1">
                1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.3.0/underscore.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.2.4/underscore.js"
              data-name="1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.4">
                1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.2.3/underscore.js"
              data-name="1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.3">
                1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.2.2/underscore.js"
              data-name="1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.2">
                1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.2.1/underscore.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.2.0/underscore.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.7/underscore.js"
              data-name="1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.7">
                1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.6/underscore.js"
              data-name="1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.6">
                1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.5/underscore.js"
              data-name="1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.5">
                1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.4/underscore.js"
              data-name="1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.4">
                1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.3/underscore.js"
              data-name="1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.3">
                1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.2/underscore.js"
              data-name="1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.2">
                1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.1/underscore.js"
              data-name="1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.1">
                1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.1.0/underscore.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.0.4/underscore.js"
              data-name="1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.4">
                1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.0.3/underscore.js"
              data-name="1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.3">
                1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.0.2/underscore.js"
              data-name="1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.2">
                1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.0.1/underscore.js"
              data-name="1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.1">
                1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/1.0.0/underscore.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.6.0/underscore.js"
              data-name="0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.0">
                0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.8/underscore.js"
              data-name="0.5.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.8">
                0.5.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.7/underscore.js"
              data-name="0.5.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.7">
                0.5.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.6/underscore.js"
              data-name="0.5.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.6">
                0.5.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.5/underscore.js"
              data-name="0.5.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.5">
                0.5.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.4/underscore.js"
              data-name="0.5.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.4">
                0.5.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.3/underscore.js"
              data-name="0.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.3">
                0.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.2/underscore.js"
              data-name="0.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.2">
                0.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.1/underscore.js"
              data-name="0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.1">
                0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.5.0/underscore.js"
              data-name="0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.0">
                0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.7/underscore.js"
              data-name="0.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.7">
                0.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.6/underscore.js"
              data-name="0.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.6">
                0.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.5/underscore.js"
              data-name="0.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.5">
                0.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.4/underscore.js"
              data-name="0.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.4">
                0.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.3/underscore.js"
              data-name="0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.3">
                0.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.2/underscore.js"
              data-name="0.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.2">
                0.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.1/underscore.js"
              data-name="0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.1">
                0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.4.0/underscore.js"
              data-name="0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.0">
                0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.3.3/underscore.js"
              data-name="0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.3">
                0.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.3.2/underscore.js"
              data-name="0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.2">
                0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.3.1/underscore.js"
              data-name="0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.1">
                0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.3.0/underscore.js"
              data-name="0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.0">
                0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.2.0/underscore.js"
              data-name="0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.0">
                0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.1.1/underscore.js"
              data-name="0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.1">
                0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jashkenas/underscore/tree/0.1.0/underscore.js"
              data-name="0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.1.0">
                0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/jashkenas/underscore/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jashkenas/underscore"><span>underscore</span></a></span></span><span class="separator">/</span><strong class="final-path">underscore.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/jashkenas/underscore/commit/8fc7032295d60aff3620ef85d4aa6549a55688a0" data-pjax>
          8fc7032
        </a>
        <relative-time datetime="2017-01-02T04:41:48Z">Jan 2, 2017</relative-time>
      </span>
      <div>
        <img alt="@amZotti" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5640348?v=3&amp;s=40" width="20" />
        <a href="/amZotti" class="user-mention" rel="contributor">amZotti</a>
          <a href="/jashkenas/underscore/commit/8fc7032295d60aff3620ef85d4aa6549a55688a0" class="message" data-pjax="true" title="Docs: Upgrade year in copyright to 2017">Docs: Upgrade year in copyright to 2017</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>178</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jashkenas" href="/jashkenas/underscore/commits/master/underscore.js?author=jashkenas"><img alt="@jashkenas" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/4732?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="megawac" href="/jashkenas/underscore/commits/master/underscore.js?author=megawac"><img alt="@megawac" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3475472?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="braddunbar" href="/jashkenas/underscore/commits/master/underscore.js?author=braddunbar"><img alt="@braddunbar" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11674?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="michaelficarra" href="/jashkenas/underscore/commits/master/underscore.js?author=michaelficarra"><img alt="@michaelficarra" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/218840?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jridgewell" href="/jashkenas/underscore/commits/master/underscore.js?author=jridgewell"><img alt="@jridgewell" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/112982?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="akre54" href="/jashkenas/underscore/commits/master/underscore.js?author=akre54"><img alt="@akre54" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/931368?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="captbaritone" href="/jashkenas/underscore/commits/master/underscore.js?author=captbaritone"><img alt="@captbaritone" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/162735?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ratbeard" href="/jashkenas/underscore/commits/master/underscore.js?author=ratbeard"><img alt="@ratbeard" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/28356?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ryantenney" href="/jashkenas/underscore/commits/master/underscore.js?author=ryantenney"><img alt="@ryantenney" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/124015?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davidchambers" href="/jashkenas/underscore/commits/master/underscore.js?author=davidchambers"><img alt="@davidchambers" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/210406?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mehdishojaei" href="/jashkenas/underscore/commits/master/underscore.js?author=mehdishojaei"><img alt="@mehdishojaei" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/2007598?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jdalton" href="/jashkenas/underscore/commits/master/underscore.js?author=jdalton"><img alt="@jdalton" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/4303?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="almost" href="/jashkenas/underscore/commits/master/underscore.js?author=almost"><img alt="@almost" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/11125?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="octatone" href="/jashkenas/underscore/commits/master/underscore.js?author=octatone"><img alt="@octatone" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/492289?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="iamnoah" href="/jashkenas/underscore/commits/master/underscore.js?author=iamnoah"><img alt="@iamnoah" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/139201?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="samuelclay" href="/jashkenas/underscore/commits/master/underscore.js?author=samuelclay"><img alt="@samuelclay" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/44229?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="thejameskyle" href="/jashkenas/underscore/commits/master/underscore.js?author=thejameskyle"><img alt="@thejameskyle" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/952783?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="liuyl" href="/jashkenas/underscore/commits/master/underscore.js?author=liuyl"><img alt="@liuyl" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1261809?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="AdamCraven" href="/jashkenas/underscore/commits/master/underscore.js?author=AdamCraven"><img alt="@AdamCraven" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/610638?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hackreactor-students" href="/jashkenas/underscore/commits/master/underscore.js?author=hackreactor-students"><img alt="@hackreactor-students" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2849210?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vincentwoo" href="/jashkenas/underscore/commits/master/underscore.js?author=vincentwoo"><img alt="@vincentwoo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/613320?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lfac-pt" href="/jashkenas/underscore/commits/master/underscore.js?author=lfac-pt"><img alt="@lfac-pt" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/969146?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jrburke" href="/jashkenas/underscore/commits/master/underscore.js?author=jrburke"><img alt="@jrburke" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/73359?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="caseywebdev" href="/jashkenas/underscore/commits/master/underscore.js?author=caseywebdev"><img alt="@caseywebdev" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1181237?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="wgpsutherland" href="/jashkenas/underscore/commits/master/underscore.js?author=wgpsutherland"><img alt="@wgpsutherland" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5879966?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="spadgos" href="/jashkenas/underscore/commits/master/underscore.js?author=spadgos"><img alt="@spadgos" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/426222?v=3&amp;s=40" width="20" /> </a>

    <button type="button" data-facebox="#blob_contributors_box" class="btn-link others-text">and others</button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jashkenas" height="24" src="https://avatars0.githubusercontent.com/u/4732?v=3&amp;s=48" width="24" />
            <a href="/jashkenas">jashkenas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@megawac" height="24" src="https://avatars2.githubusercontent.com/u/3475472?v=3&amp;s=48" width="24" />
            <a href="/megawac">megawac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@braddunbar" height="24" src="https://avatars2.githubusercontent.com/u/11674?v=3&amp;s=48" width="24" />
            <a href="/braddunbar">braddunbar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@michaelficarra" height="24" src="https://avatars0.githubusercontent.com/u/218840?v=3&amp;s=48" width="24" />
            <a href="/michaelficarra">michaelficarra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jridgewell" height="24" src="https://avatars2.githubusercontent.com/u/112982?v=3&amp;s=48" width="24" />
            <a href="/jridgewell">jridgewell</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@akre54" height="24" src="https://avatars0.githubusercontent.com/u/931368?v=3&amp;s=48" width="24" />
            <a href="/akre54">akre54</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@captbaritone" height="24" src="https://avatars1.githubusercontent.com/u/162735?v=3&amp;s=48" width="24" />
            <a href="/captbaritone">captbaritone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ratbeard" height="24" src="https://avatars1.githubusercontent.com/u/28356?v=3&amp;s=48" width="24" />
            <a href="/ratbeard">ratbeard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ryantenney" height="24" src="https://avatars1.githubusercontent.com/u/124015?v=3&amp;s=48" width="24" />
            <a href="/ryantenney">ryantenney</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davidchambers" height="24" src="https://avatars1.githubusercontent.com/u/210406?v=3&amp;s=48" width="24" />
            <a href="/davidchambers">davidchambers</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mehdishojaei" height="24" src="https://avatars3.githubusercontent.com/u/2007598?v=3&amp;s=48" width="24" />
            <a href="/mehdishojaei">mehdishojaei</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jdalton" height="24" src="https://avatars0.githubusercontent.com/u/4303?v=3&amp;s=48" width="24" />
            <a href="/jdalton">jdalton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@almost" height="24" src="https://avatars1.githubusercontent.com/u/11125?v=3&amp;s=48" width="24" />
            <a href="/almost">almost</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@octatone" height="24" src="https://avatars2.githubusercontent.com/u/492289?v=3&amp;s=48" width="24" />
            <a href="/octatone">octatone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@iamnoah" height="24" src="https://avatars0.githubusercontent.com/u/139201?v=3&amp;s=48" width="24" />
            <a href="/iamnoah">iamnoah</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@samuelclay" height="24" src="https://avatars1.githubusercontent.com/u/44229?v=3&amp;s=48" width="24" />
            <a href="/samuelclay">samuelclay</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@thejameskyle" height="24" src="https://avatars2.githubusercontent.com/u/952783?v=3&amp;s=48" width="24" />
            <a href="/thejameskyle">thejameskyle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@liuyl" height="24" src="https://avatars2.githubusercontent.com/u/1261809?v=3&amp;s=48" width="24" />
            <a href="/liuyl">liuyl</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@AdamCraven" height="24" src="https://avatars3.githubusercontent.com/u/610638?v=3&amp;s=48" width="24" />
            <a href="/AdamCraven">AdamCraven</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hackreactor-students" height="24" src="https://avatars1.githubusercontent.com/u/2849210?v=3&amp;s=48" width="24" />
            <a href="/hackreactor-students">hackreactor-students</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vincentwoo" height="24" src="https://avatars1.githubusercontent.com/u/613320?v=3&amp;s=48" width="24" />
            <a href="/vincentwoo">vincentwoo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lfac-pt" height="24" src="https://avatars1.githubusercontent.com/u/969146?v=3&amp;s=48" width="24" />
            <a href="/lfac-pt">lfac-pt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jrburke" height="24" src="https://avatars2.githubusercontent.com/u/73359?v=3&amp;s=48" width="24" />
            <a href="/jrburke">jrburke</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@caseywebdev" height="24" src="https://avatars0.githubusercontent.com/u/1181237?v=3&amp;s=48" width="24" />
            <a href="/caseywebdev">caseywebdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wgpsutherland" height="24" src="https://avatars1.githubusercontent.com/u/5879966?v=3&amp;s=48" width="24" />
            <a href="/wgpsutherland">wgpsutherland</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@spadgos" height="24" src="https://avatars2.githubusercontent.com/u/426222?v=3&amp;s=48" width="24" />
            <a href="/spadgos">spadgos</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@smarden1" height="24" src="https://avatars3.githubusercontent.com/u/549155?v=3&amp;s=48" width="24" />
            <a href="/smarden1">smarden1</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@shinuza" height="24" src="https://avatars2.githubusercontent.com/u/137940?v=3&amp;s=48" width="24" />
            <a href="/shinuza">shinuza</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@melnikov-s" height="24" src="https://avatars2.githubusercontent.com/u/3513040?v=3&amp;s=48" width="24" />
            <a href="/melnikov-s">melnikov-s</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lifesinger" height="24" src="https://avatars3.githubusercontent.com/u/97227?v=3&amp;s=48" width="24" />
            <a href="/lifesinger">lifesinger</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kitcambridge" height="24" src="https://avatars1.githubusercontent.com/u/243830?v=3&amp;s=48" width="24" />
            <a href="/kitcambridge">kitcambridge</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jasondavies" height="24" src="https://avatars3.githubusercontent.com/u/31223?v=3&amp;s=48" width="24" />
            <a href="/jasondavies">jasondavies</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@janraasch" height="24" src="https://avatars2.githubusercontent.com/u/425211?v=3&amp;s=48" width="24" />
            <a href="/janraasch">janraasch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@CodeFalling" height="24" src="https://avatars3.githubusercontent.com/u/5436704?v=3&amp;s=48" width="24" />
            <a href="/CodeFalling">CodeFalling</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zertosh" height="24" src="https://avatars0.githubusercontent.com/u/830952?v=3&amp;s=48" width="24" />
            <a href="/zertosh">zertosh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bathos" height="24" src="https://avatars0.githubusercontent.com/u/6257356?v=3&amp;s=48" width="24" />
            <a href="/bathos">bathos</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tkristiansen" height="24" src="https://avatars3.githubusercontent.com/u/301104?v=3&amp;s=48" width="24" />
            <a href="/tkristiansen">tkristiansen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ryanve" height="24" src="https://avatars2.githubusercontent.com/u/949985?v=3&amp;s=48" width="24" />
            <a href="/ryanve">ryanve</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@malclocke" height="24" src="https://avatars1.githubusercontent.com/u/169126?v=3&amp;s=48" width="24" />
            <a href="/malclocke">malclocke</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MahmudH" height="24" src="https://avatars0.githubusercontent.com/u/6651749?v=3&amp;s=48" width="24" />
            <a href="/MahmudH">MahmudH</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kishanov" height="24" src="https://avatars1.githubusercontent.com/u/5998299?v=3&amp;s=48" width="24" />
            <a href="/kishanov">kishanov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JonAbrams" height="24" src="https://avatars0.githubusercontent.com/u/1243092?v=3&amp;s=48" width="24" />
            <a href="/JonAbrams">JonAbrams</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@int3" height="24" src="https://avatars2.githubusercontent.com/u/228496?v=3&amp;s=48" width="24" />
            <a href="/int3">int3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JeffAMcGee" height="24" src="https://avatars3.githubusercontent.com/u/212638?v=3&amp;s=48" width="24" />
            <a href="/JeffAMcGee">JeffAMcGee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jayphelps" height="24" src="https://avatars0.githubusercontent.com/u/762949?v=3&amp;s=48" width="24" />
            <a href="/jayphelps">jayphelps</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jmrog" height="24" src="https://avatars0.githubusercontent.com/u/8409748?v=3&amp;s=48" width="24" />
            <a href="/jmrog">jmrog</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mcmire" height="24" src="https://avatars0.githubusercontent.com/u/7371?v=3&amp;s=48" width="24" />
            <a href="/mcmire">mcmire</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@DmitryBaranovskiy" height="24" src="https://avatars3.githubusercontent.com/u/22726?v=3&amp;s=48" width="24" />
            <a href="/DmitryBaranovskiy">DmitryBaranovskiy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tnga" height="24" src="https://avatars0.githubusercontent.com/u/12436411?v=3&amp;s=48" width="24" />
            <a href="/tnga">tnga</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@demoneaux" height="24" src="https://avatars0.githubusercontent.com/u/813865?v=3&amp;s=48" width="24" />
            <a href="/demoneaux">demoneaux</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gka" height="24" src="https://avatars2.githubusercontent.com/u/617518?v=3&amp;s=48" width="24" />
            <a href="/gka">gka</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@BlakeSimpson" height="24" src="https://avatars3.githubusercontent.com/u/861223?v=3&amp;s=48" width="24" />
            <a href="/BlakeSimpson">BlakeSimpson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tonylukasavage" height="24" src="https://avatars1.githubusercontent.com/u/594112?v=3&amp;s=48" width="24" />
            <a href="/tonylukasavage">tonylukasavage</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ahonn" height="24" src="https://avatars2.githubusercontent.com/u/9718515?v=3&amp;s=48" width="24" />
            <a href="/ahonn">ahonn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@invalid-email-address" height="24" src="https://avatars3.githubusercontent.com/u/148100?v=3&amp;s=48" width="24" />
            <a href="/invalid-email-address">invalid-email-address</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wachunga" height="24" src="https://avatars1.githubusercontent.com/u/438545?v=3&amp;s=48" width="24" />
            <a href="/wachunga">wachunga</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vhmth" height="24" src="https://avatars3.githubusercontent.com/u/603426?v=3&amp;s=48" width="24" />
            <a href="/vhmth">vhmth</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jed" height="24" src="https://avatars2.githubusercontent.com/u/4433?v=3&amp;s=48" width="24" />
            <a href="/jed">jed</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tpgmartin" height="24" src="https://avatars1.githubusercontent.com/u/3996823?v=3&amp;s=48" width="24" />
            <a href="/tpgmartin">tpgmartin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@creationix" height="24" src="https://avatars3.githubusercontent.com/u/89353?v=3&amp;s=48" width="24" />
            <a href="/creationix">creationix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@knowtheory" height="24" src="https://avatars2.githubusercontent.com/u/192?v=3&amp;s=48" width="24" />
            <a href="/knowtheory">knowtheory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@TalAter" height="24" src="https://avatars0.githubusercontent.com/u/926653?v=3&amp;s=48" width="24" />
            <a href="/TalAter">TalAter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@subzey" height="24" src="https://avatars3.githubusercontent.com/u/810582?v=3&amp;s=48" width="24" />
            <a href="/subzey">subzey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Stuk" height="24" src="https://avatars0.githubusercontent.com/u/48019?v=3&amp;s=48" width="24" />
            <a href="/Stuk">Stuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sdwebster" height="24" src="https://avatars1.githubusercontent.com/u/8903358?v=3&amp;s=48" width="24" />
            <a href="/sdwebster">sdwebster</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sjpsega" height="24" src="https://avatars2.githubusercontent.com/u/436223?v=3&amp;s=48" width="24" />
            <a href="/sjpsega">sjpsega</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sgentle" height="24" src="https://avatars2.githubusercontent.com/u/441426?v=3&amp;s=48" width="24" />
            <a href="/sgentle">sgentle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@npcode" height="24" src="https://avatars0.githubusercontent.com/u/1129852?v=3&amp;s=48" width="24" />
            <a href="/npcode">npcode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wilzbach" height="24" src="https://avatars1.githubusercontent.com/u/4370550?v=3&amp;s=48" width="24" />
            <a href="/wilzbach">wilzbach</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robbiehudson" height="24" src="https://avatars3.githubusercontent.com/u/135847?v=3&amp;s=48" width="24" />
            <a href="/robbiehudson">robbiehudson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@yuchi" height="24" src="https://avatars0.githubusercontent.com/u/646609?v=3&amp;s=48" width="24" />
            <a href="/yuchi">yuchi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@petejkim" height="24" src="https://avatars0.githubusercontent.com/u/30173?v=3&amp;s=48" width="24" />
            <a href="/petejkim">petejkim</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ded" height="24" src="https://avatars2.githubusercontent.com/u/372683?v=3&amp;s=48" width="24" />
            <a href="/ded">ded</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@prust" height="24" src="https://avatars3.githubusercontent.com/u/23037?v=3&amp;s=48" width="24" />
            <a href="/prust">prust</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@opensas" height="24" src="https://avatars2.githubusercontent.com/u/481687?v=3&amp;s=48" width="24" />
            <a href="/opensas">opensas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@coolov" height="24" src="https://avatars2.githubusercontent.com/u/2272019?v=3&amp;s=48" width="24" />
            <a href="/coolov">coolov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@phadej" height="24" src="https://avatars0.githubusercontent.com/u/51087?v=3&amp;s=48" width="24" />
            <a href="/phadej">phadej</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ansman" height="24" src="https://avatars1.githubusercontent.com/u/102883?v=3&amp;s=48" width="24" />
            <a href="/ansman">ansman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nickstenning" height="24" src="https://avatars2.githubusercontent.com/u/3602?v=3&amp;s=48" width="24" />
            <a href="/nickstenning">nickstenning</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hx" height="24" src="https://avatars0.githubusercontent.com/u/692853?v=3&amp;s=48" width="24" />
            <a href="/hx">hx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@nhunzaker" height="24" src="https://avatars2.githubusercontent.com/u/590904?v=3&amp;s=48" width="24" />
            <a href="/nhunzaker">nhunzaker</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@shesek" height="24" src="https://avatars2.githubusercontent.com/u/877904?v=3&amp;s=48" width="24" />
            <a href="/shesek">shesek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mrjjwright" height="24" src="https://avatars2.githubusercontent.com/u/4343?v=3&amp;s=48" width="24" />
            <a href="/mrjjwright">mrjjwright</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mcbex" height="24" src="https://avatars0.githubusercontent.com/u/2942133?v=3&amp;s=48" width="24" />
            <a href="/mcbex">mcbex</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mikez302" height="24" src="https://avatars3.githubusercontent.com/u/510781?v=3&amp;s=48" width="24" />
            <a href="/mikez302">mikez302</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mwilliamson" height="24" src="https://avatars0.githubusercontent.com/u/391876?v=3&amp;s=48" width="24" />
            <a href="/mwilliamson">mwilliamson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jugglinmike" height="24" src="https://avatars0.githubusercontent.com/u/677252?v=3&amp;s=48" width="24" />
            <a href="/jugglinmike">jugglinmike</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fogus" height="24" src="https://avatars1.githubusercontent.com/u/12632?v=3&amp;s=48" width="24" />
            <a href="/fogus">fogus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tjbarber" height="24" src="https://avatars0.githubusercontent.com/u/1207371?v=3&amp;s=48" width="24" />
            <a href="/tjbarber">tjbarber</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mhansen" height="24" src="https://avatars2.githubusercontent.com/u/105529?v=3&amp;s=48" width="24" />
            <a href="/mhansen">mhansen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@markstory" height="24" src="https://avatars1.githubusercontent.com/u/24086?v=3&amp;s=48" width="24" />
            <a href="/markstory">markstory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@marksanghoonkim" height="24" src="https://avatars1.githubusercontent.com/u/8499015?v=3&amp;s=48" width="24" />
            <a href="/marksanghoonkim">marksanghoonkim</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@marekventur" height="24" src="https://avatars0.githubusercontent.com/u/158185?v=3&amp;s=48" width="24" />
            <a href="/marekventur">marekventur</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@erikbern" height="24" src="https://avatars1.githubusercontent.com/u/1027979?v=3&amp;s=48" width="24" />
            <a href="/erikbern">erikbern</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mattrobenolt" height="24" src="https://avatars3.githubusercontent.com/u/375744?v=3&amp;s=48" width="24" />
            <a href="/mattrobenolt">mattrobenolt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@marijaselakovic" height="24" src="https://avatars2.githubusercontent.com/u/7926726?v=3&amp;s=48" width="24" />
            <a href="/marijaselakovic">marijaselakovic</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@linkkingjay" height="24" src="https://avatars3.githubusercontent.com/u/2505538?v=3&amp;s=48" width="24" />
            <a href="/linkkingjay">linkkingjay</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@limeblack" height="24" src="https://avatars0.githubusercontent.com/u/372491?v=3&amp;s=48" width="24" />
            <a href="/limeblack">limeblack</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lexdene" height="24" src="https://avatars1.githubusercontent.com/u/694227?v=3&amp;s=48" width="24" />
            <a href="/lexdene">lexdene</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lennym" height="24" src="https://avatars1.githubusercontent.com/u/117398?v=3&amp;s=48" width="24" />
            <a href="/lennym">lennym</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@shama" height="24" src="https://avatars2.githubusercontent.com/u/99604?v=3&amp;s=48" width="24" />
            <a href="/shama">shama</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kriskowal" height="24" src="https://avatars2.githubusercontent.com/u/60294?v=3&amp;s=48" width="24" />
            <a href="/kriskowal">kriskowal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kjbekkelund" height="24" src="https://avatars1.githubusercontent.com/u/5259?v=3&amp;s=48" width="24" />
            <a href="/kjbekkelund">kjbekkelund</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kingdido999" height="24" src="https://avatars0.githubusercontent.com/u/3196372?v=3&amp;s=48" width="24" />
            <a href="/kingdido999">kingdido999</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kevinoid" height="24" src="https://avatars0.githubusercontent.com/u/336433?v=3&amp;s=48" width="24" />
            <a href="/kevinoid">kevinoid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kapooostin" height="24" src="https://avatars3.githubusercontent.com/u/467097?v=3&amp;s=48" width="24" />
            <a href="/kapooostin">kapooostin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@josh" height="24" src="https://avatars2.githubusercontent.com/u/137?v=3&amp;s=48" width="24" />
            <a href="/josh">josh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jasonLaster" height="24" src="https://avatars2.githubusercontent.com/u/254562?v=3&amp;s=48" width="24" />
            <a href="/jasonLaster">jasonLaster</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@machineloop" height="24" src="https://avatars2.githubusercontent.com/u/3682072?v=3&amp;s=48" width="24" />
            <a href="/machineloop">machineloop</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stonelee" height="24" src="https://avatars2.githubusercontent.com/u/571863?v=3&amp;s=48" width="24" />
            <a href="/stonelee">stonelee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@taiju" height="24" src="https://avatars3.githubusercontent.com/u/95721?v=3&amp;s=48" width="24" />
            <a href="/taiju">taiju</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@guiled" height="24" src="https://avatars3.githubusercontent.com/u/311895?v=3&amp;s=48" width="24" />
            <a href="/guiled">guiled</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gsamokovarov" height="24" src="https://avatars2.githubusercontent.com/u/604618?v=3&amp;s=48" width="24" />
            <a href="/gsamokovarov">gsamokovarov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@glasser" height="24" src="https://avatars3.githubusercontent.com/u/16724?v=3&amp;s=48" width="24" />
            <a href="/glasser">glasser</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jawj" height="24" src="https://avatars1.githubusercontent.com/u/141620?v=3&amp;s=48" width="24" />
            <a href="/jawj">jawj</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gfredericks" height="24" src="https://avatars0.githubusercontent.com/u/135443?v=3&amp;s=48" width="24" />
            <a href="/gfredericks">gfredericks</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chaoflow" height="24" src="https://avatars0.githubusercontent.com/u/89596?v=3&amp;s=48" width="24" />
            <a href="/chaoflow">chaoflow</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rfletcher" height="24" src="https://avatars1.githubusercontent.com/u/39261?v=3&amp;s=48" width="24" />
            <a href="/rfletcher">rfletcher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kutyel" height="24" src="https://avatars0.githubusercontent.com/u/5127501?v=3&amp;s=48" width="24" />
            <a href="/kutyel">kutyel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@emorikawa" height="24" src="https://avatars1.githubusercontent.com/u/489001?v=3&amp;s=48" width="24" />
            <a href="/emorikawa">emorikawa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ewr" height="24" src="https://avatars3.githubusercontent.com/u/204350?v=3&amp;s=48" width="24" />
            <a href="/ewr">ewr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@skaterdav85" height="24" src="https://avatars1.githubusercontent.com/u/687449?v=3&amp;s=48" width="24" />
            <a href="/skaterdav85">skaterdav85</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@deiwin" height="24" src="https://avatars2.githubusercontent.com/u/2261897?v=3&amp;s=48" width="24" />
            <a href="/deiwin">deiwin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tillberg" height="24" src="https://avatars0.githubusercontent.com/u/104587?v=3&amp;s=48" width="24" />
            <a href="/tillberg">tillberg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@colinta" height="24" src="https://avatars2.githubusercontent.com/u/27570?v=3&amp;s=48" width="24" />
            <a href="/colinta">colinta</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cleishm" height="24" src="https://avatars0.githubusercontent.com/u/79651?v=3&amp;s=48" width="24" />
            <a href="/cleishm">cleishm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bryanwoods" height="24" src="https://avatars3.githubusercontent.com/u/18175?v=3&amp;s=48" width="24" />
            <a href="/bryanwoods">bryanwoods</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@foobarfighter" height="24" src="https://avatars0.githubusercontent.com/u/31485?v=3&amp;s=48" width="24" />
            <a href="/foobarfighter">foobarfighter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bmaland" height="24" src="https://avatars2.githubusercontent.com/u/2651?v=3&amp;s=48" width="24" />
            <a href="/bmaland">bmaland</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chris-baynes" height="24" src="https://avatars0.githubusercontent.com/u/251360?v=3&amp;s=48" width="24" />
            <a href="/chris-baynes">chris-baynes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bdusell" height="24" src="https://avatars2.githubusercontent.com/u/5336190?v=3&amp;s=48" width="24" />
            <a href="/bdusell">bdusell</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@banterability" height="24" src="https://avatars3.githubusercontent.com/u/11073?v=3&amp;s=48" width="24" />
            <a href="/banterability">banterability</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@aseemk" height="24" src="https://avatars1.githubusercontent.com/u/537838?v=3&amp;s=48" width="24" />
            <a href="/aseemk">aseemk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arlolra" height="24" src="https://avatars2.githubusercontent.com/u/123708?v=3&amp;s=48" width="24" />
            <a href="/arlolra">arlolra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arianf" height="24" src="https://avatars0.githubusercontent.com/u/7397857?v=3&amp;s=48" width="24" />
            <a href="/arianf">arianf</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@amZotti" height="24" src="https://avatars0.githubusercontent.com/u/5640348?v=3&amp;s=48" width="24" />
            <a href="/amZotti">amZotti</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@helloenvoy-andrew" height="24" src="https://avatars1.githubusercontent.com/u/8950007?v=3&amp;s=48" width="24" />
            <a href="/helloenvoy-andrew">helloenvoy-andrew</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@amit3vr" height="24" src="https://avatars1.githubusercontent.com/u/13842926?v=3&amp;s=48" width="24" />
            <a href="/amit3vr">amit3vr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@albemuth" height="24" src="https://avatars1.githubusercontent.com/u/12791?v=3&amp;s=48" width="24" />
            <a href="/albemuth">albemuth</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alewiscondev" height="24" src="https://avatars1.githubusercontent.com/u/10676007?v=3&amp;s=48" width="24" />
            <a href="/alewiscondev">alewiscondev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@albertsun" height="24" src="https://avatars2.githubusercontent.com/u/382862?v=3&amp;s=48" width="24" />
            <a href="/albertsun">albertsun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@adamnbowen" height="24" src="https://avatars1.githubusercontent.com/u/475879?v=3&amp;s=48" width="24" />
            <a href="/adamnbowen">adamnbowen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@eins78" height="24" src="https://avatars1.githubusercontent.com/u/134942?v=3&amp;s=48" width="24" />
            <a href="/eins78">eins78</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/jashkenas/underscore/raw/master/underscore.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/jashkenas/underscore/blame/master/underscore.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/jashkenas/underscore/commits/master/underscore.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1684 lines (1491 sloc)
      <span class="file-info-divider"></span>
    56.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>     Underscore.js 1.8.3</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>     http://underscorejs.org</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>     (c) 2009-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>     Underscore may be freely distributed under the MIT license.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Baseline setup</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> --------------</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Establish the root object, `window` (`self`) in the browser, `global`</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> on the server, or `this` in some virtual machines. We use `self`</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> instead of `window` for `WebWorker` support.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> root <span class="pl-k">=</span> <span class="pl-k">typeof</span> self <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">self</span>.<span class="pl-c1">self</span> <span class="pl-k">===</span> self <span class="pl-k">&amp;&amp;</span> self <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">typeof</span> <span class="pl-c1">global</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">global</span>.<span class="pl-smi">global</span> <span class="pl-k">===</span> <span class="pl-c1">global</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">global</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">            {};</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Save the previous value of the `_` variable.</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> previousUnderscore <span class="pl-k">=</span> <span class="pl-smi">root</span>.<span class="pl-smi">_</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Save bytes in the minified (but not gzipped) version:</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> ArrayProto <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>, ObjProto <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> SymbolProto <span class="pl-k">=</span> <span class="pl-k">typeof</span> <span class="pl-c1">Symbol</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">Symbol</span>.<span class="pl-c1">prototype</span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create quick reference variables for speed access to core prototypes.</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> push <span class="pl-k">=</span> <span class="pl-smi">ArrayProto</span>.<span class="pl-smi">push</span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      slice <span class="pl-k">=</span> <span class="pl-smi">ArrayProto</span>.<span class="pl-smi">slice</span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      toString <span class="pl-k">=</span> <span class="pl-smi">ObjProto</span>.<span class="pl-smi">toString</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      hasOwnProperty <span class="pl-k">=</span> <span class="pl-smi">ObjProto</span>.<span class="pl-smi">hasOwnProperty</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> All **ECMAScript 5** native function implementations that we hope to use</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> are declared here.</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> nativeIsArray <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-smi">isArray</span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      nativeKeys <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-smi">keys</span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      nativeCreate <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-smi">create</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Naked function reference for surrogate-prototype-swapping.</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">Ctor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){};</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create a safe reference to the Underscore object for use below.</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">_</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">instanceof</span> _) <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-c1">this</span> <span class="pl-k">instanceof</span> _)) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">_</span>(obj);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span> <span class="pl-k">=</span> obj;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Export the Underscore object for **Node.js**, with</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> backwards-compatibility for their old module API. If we&#39;re in</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the browser, add `_` as a global object.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> (`nodeType` is checked to ensure that `module`</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> and `exports` are not HTML elements.)</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">exports</span>.<span class="pl-c1">nodeType</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">module</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> _;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">exports</span>.<span class="pl-smi">_</span> <span class="pl-k">=</span> _;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">_</span> <span class="pl-k">=</span> _;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Current version.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-c1">VERSION</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.8.3<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Internal function that returns an efficient (for current engines) version</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> of the passed-in callback, to be repeatedly applied in other Underscore</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> functions.</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">optimizeCb</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">context</span>, <span class="pl-smi">argCount</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (context <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> func;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">switch</span> (argCount) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">1</span>: <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(context, value);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> The 2-parameter case has been omitted only because no current consumers</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> made use of it.</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">null</span>:</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">3</span>: <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">index</span>, <span class="pl-smi">collection</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(context, value, index, collection);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">4</span>: <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">accumulator</span>, <span class="pl-smi">value</span>, <span class="pl-smi">index</span>, <span class="pl-smi">collection</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(context, accumulator, value, index, collection);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(context, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> builtinIteratee;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> An internal function to generate callbacks that can be applied to each</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> element in a collection, returning the desired result — either `identity`,</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> an arbitrary callback, a property matcher, or a property accessor.</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">cb</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">context</span>, <span class="pl-smi">argCount</span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-smi">iteratee</span> <span class="pl-k">!==</span> builtinIteratee) <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">iteratee</span>(value, context);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (value <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-smi">identity</span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(value)) <span class="pl-k">return</span> <span class="pl-en">optimizeCb</span>(value, context, argCount);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(value) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(value)) <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">matcher</span>(value);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">property</span>(value);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> External wrapper for our callback generator. Users may customize</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> `_.iteratee` if they want additional predicate/iteratee shorthand styles.</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> This abstraction hides the internal-only argCount argument.</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">iteratee</span> <span class="pl-k">=</span> <span class="pl-en">builtinIteratee</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">cb</span>(value, context, <span class="pl-c1">Infinity</span>);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Similar to ES6&#39;s rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> This accumulates the arguments passed into an array, after a given index.</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">restArgs</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">startIndex</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">    startIndex <span class="pl-k">=</span> startIndex <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-smi">func</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">+</span>startIndex;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> startIndex, <span class="pl-c1">0</span>),</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">          rest <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length),</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">          index <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        rest[index] <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[index <span class="pl-k">+</span> startIndex];</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">switch</span> (startIndex) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">0</span>: <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, rest);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">1</span>: <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>], rest);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-c1">2</span>: <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>], <span class="pl-c1">arguments</span>[<span class="pl-c1">1</span>], rest);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>(startIndex <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> startIndex; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        args[index] <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[index];</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">      args[startIndex] <span class="pl-k">=</span> rest;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> An internal function for creating a new object that inherits from another.</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">baseCreate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">prototype</span>) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(prototype)) <span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (nativeCreate) <span class="pl-k">return</span> <span class="pl-en">nativeCreate</span>(prototype);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Ctor</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> prototype;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Ctor</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Ctor</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">shallowProperty</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> obj <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-k">void</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> obj[key];</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">deepGet</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> obj[path[i]];</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> length <span class="pl-k">?</span> obj <span class="pl-k">:</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Helper for collection methods to determine whether a collection</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> should be iterated as an array or as an object.</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">MAX_ARRAY_INDEX</span> <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">pow</span>(<span class="pl-c1">2</span>, <span class="pl-c1">53</span>) <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> getLength <span class="pl-k">=</span> <span class="pl-en">shallowProperty</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>length<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">isArrayLike</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">collection</span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(collection);</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">typeof</span> length <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> length <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> length <span class="pl-k">&lt;=</span> <span class="pl-c1">MAX_ARRAY_INDEX</span>;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Collection Functions</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> --------------------</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> The cornerstone, an `each` implementation, aka `forEach`.</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Handles raw objects in addition to array-likes. Treats all</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> sparse array-likes as if they were dense.</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">each</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">forEach</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">optimizeCb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> i, length;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isArrayLike</span>(obj)) {</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">iteratee</span>(obj[i], i, obj);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">iteratee</span>(obj[keys[i]], keys[i], obj);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the results of applying the iteratee to each element.</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">map</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">collect</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj),</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        length <span class="pl-k">=</span> (keys <span class="pl-k">||</span> obj).<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        results <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> currentKey <span class="pl-k">=</span> keys <span class="pl-k">?</span> keys[index] <span class="pl-k">:</span> index;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">      results[index] <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(obj[currentKey], currentKey, obj);</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create a reducing function iterating left or right.</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">createReduce</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">dir</span>) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Wrap code that reassigns argument variables in a separate function than</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> the one that accesses `arguments.length` to avoid a perf hit. (#1991)</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">reducer</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">memo</span>, <span class="pl-smi">initial</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj),</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">          length <span class="pl-k">=</span> (keys <span class="pl-k">||</span> obj).<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">          index <span class="pl-k">=</span> dir <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> length <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>initial) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        memo <span class="pl-k">=</span> obj[keys <span class="pl-k">?</span> keys[index] <span class="pl-k">:</span> index];</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        index <span class="pl-k">+=</span> dir;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (; index <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> index <span class="pl-k">&lt;</span> length; index <span class="pl-k">+=</span> dir) {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> currentKey <span class="pl-k">=</span> keys <span class="pl-k">?</span> keys[index] <span class="pl-k">:</span> index;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        memo <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(memo, obj[currentKey], currentKey, obj);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> memo;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">memo</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> initial <span class="pl-k">=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">reducer</span>(obj, <span class="pl-en">optimizeCb</span>(iteratee, context, <span class="pl-c1">4</span>), memo, initial);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> **Reduce** builds up a single result from a list of values, aka `inject`,</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> or `foldl`.</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">reduce</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">foldl</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">inject</span> <span class="pl-k">=</span> <span class="pl-en">createReduce</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> The right-associative version of reduce, also known as `foldr`.</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">reduceRight</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">foldr</span> <span class="pl-k">=</span> <span class="pl-en">createReduce</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the first value which passes a truth test. Aliased as `detect`.</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">find</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">detect</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keyFinder <span class="pl-k">=</span> <span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">?</span> <span class="pl-smi">_</span>.<span class="pl-smi">findIndex</span> <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-smi">findKey</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-en">keyFinder</span>(obj, predicate, context);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (key <span class="pl-k">!==</span> <span class="pl-k">void</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> key <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">return</span> obj[key];</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return all the elements that pass a truth test.</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `select`.</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">filter</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">select</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> results <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    predicate <span class="pl-k">=</span> <span class="pl-en">cb</span>(predicate, context);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">index</span>, <span class="pl-smi">list</span>) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">predicate</span>(value, index, list)) <span class="pl-smi">results</span>.<span class="pl-c1">push</span>(value);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return all the elements for which a truth test fails.</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">reject</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">filter</span>(obj, <span class="pl-smi">_</span>.<span class="pl-en">negate</span>(<span class="pl-en">cb</span>(predicate)), context);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Determine whether all of the elements match a truth test.</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `all`.</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">every</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">all</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">    predicate <span class="pl-k">=</span> <span class="pl-en">cb</span>(predicate, context);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj),</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        length <span class="pl-k">=</span> (keys <span class="pl-k">||</span> obj).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> currentKey <span class="pl-k">=</span> keys <span class="pl-k">?</span> keys[index] <span class="pl-k">:</span> index;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">predicate</span>(obj[currentKey], currentKey, obj)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Determine if at least one element in the object matches a truth test.</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `any`.</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">some</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">any</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">    predicate <span class="pl-k">=</span> <span class="pl-en">cb</span>(predicate, context);</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj),</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        length <span class="pl-k">=</span> (keys <span class="pl-k">||</span> obj).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> currentKey <span class="pl-k">=</span> keys <span class="pl-k">?</span> keys[index] <span class="pl-k">:</span> index;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">predicate</span>(obj[currentKey], currentKey, obj)) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Determine if the array or object contains a given item (using `===`).</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `includes` and `include`.</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">contains</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">includes</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">include</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">item</span>, <span class="pl-smi">fromIndex</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj)) obj <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> fromIndex <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> guard) fromIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-c1">indexOf</span>(obj, item, fromIndex) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Invoke a method (with arguments) on every item in a collection.</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">invoke</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">path</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> contextPath, func;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(path)) {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">      func <span class="pl-k">=</span> path;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(path)) {</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">      contextPath <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">      path <span class="pl-k">=</span> path[<span class="pl-smi">path</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> method <span class="pl-k">=</span> func;</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>method) {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (contextPath <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">contextPath</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">          context <span class="pl-k">=</span> <span class="pl-en">deepGet</span>(context, contextPath);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (context <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        method <span class="pl-k">=</span> context[path];</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> method <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> method <span class="pl-k">:</span> <span class="pl-smi">method</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Convenience version of a common use case of `map`: fetching a property.</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">pluck</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(obj, <span class="pl-smi">_</span>.<span class="pl-en">property</span>(key));</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Convenience version of a common use case of `filter`: selecting only objects</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> containing specific `key:value` pairs.</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">where</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">filter</span>(obj, <span class="pl-smi">_</span>.<span class="pl-en">matcher</span>(attrs));</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Convenience version of a common use case of `find`: getting the first object</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> containing specific `key:value` pairs.</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">findWhere</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-c1">find</span>(obj, <span class="pl-smi">_</span>.<span class="pl-en">matcher</span>(attrs));</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the maximum element (or element-based computation).</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">max</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>, lastComputed <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">        value, computed;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (iteratee <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> (<span class="pl-k">typeof</span> iteratee <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> obj[<span class="pl-c1">0</span>] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> obj <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> <span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">?</span> obj <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">        value <span class="pl-k">=</span> obj[i];</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (value <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">&gt;</span> result) {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">          result <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">_</span>.<span class="pl-en">each</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">v</span>, <span class="pl-smi">index</span>, <span class="pl-smi">list</span>) {</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        computed <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(v, index, list);</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (computed <span class="pl-k">&gt;</span> lastComputed <span class="pl-k">||</span> computed <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span> result <span class="pl-k">===</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span>) {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">          result <span class="pl-k">=</span> v;</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">          lastComputed <span class="pl-k">=</span> computed;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the minimum element (or element-based computation).</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">min</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-c1">Infinity</span>, lastComputed <span class="pl-k">=</span> <span class="pl-c1">Infinity</span>,</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        value, computed;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (iteratee <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> (<span class="pl-k">typeof</span> iteratee <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> obj[<span class="pl-c1">0</span>] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> obj <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> <span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">?</span> obj <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        value <span class="pl-k">=</span> obj[i];</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (value <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> value <span class="pl-k">&lt;</span> result) {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">          result <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">_</span>.<span class="pl-en">each</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">v</span>, <span class="pl-smi">index</span>, <span class="pl-smi">list</span>) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        computed <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(v, index, list);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (computed <span class="pl-k">&lt;</span> lastComputed <span class="pl-k">||</span> computed <span class="pl-k">===</span> <span class="pl-c1">Infinity</span> <span class="pl-k">&amp;&amp;</span> result <span class="pl-k">===</span> <span class="pl-c1">Infinity</span>) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">          result <span class="pl-k">=</span> v;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">          lastComputed <span class="pl-k">=</span> computed;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Shuffle a collection.</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">shuffle</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">sample</span>(obj, <span class="pl-c1">Infinity</span>);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Sample **n** random values from a collection using the modern version of the</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> If **n** is not specified, returns a single random element.</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> The internal `guard` argument allows it to work with `map`.</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">sample</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">n</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (n <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> guard) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isArrayLike</span>(obj)) obj <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> obj[<span class="pl-smi">_</span>.<span class="pl-en">random</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)];</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> sample <span class="pl-k">=</span> <span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">?</span> <span class="pl-smi">_</span>.<span class="pl-en">clone</span>(obj) <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(sample);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">    n <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(n, length), <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> last <span class="pl-k">=</span> length <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> n; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> rand <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">random</span>(index, last);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> temp <span class="pl-k">=</span> sample[index];</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">      sample[index] <span class="pl-k">=</span> sample[rand];</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">      sample[rand] <span class="pl-k">=</span> temp;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">sample</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>, n);</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Sort the object&#39;s values by a criterion produced by an iteratee.</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">sortBy</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">pluck</span>(<span class="pl-smi">_</span>.<span class="pl-en">map</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>, <span class="pl-smi">list</span>) {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">        value<span class="pl-k">:</span> value,</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">        index<span class="pl-k">:</span> index<span class="pl-k">++</span>,</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">        criteria<span class="pl-k">:</span> <span class="pl-en">iteratee</span>(value, key, list)</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">    }).<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">left</span>, <span class="pl-smi">right</span>) {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-smi">left</span>.<span class="pl-smi">criteria</span>;</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">right</span>.<span class="pl-smi">criteria</span>;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (a <span class="pl-k">!==</span> b) {</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (a <span class="pl-k">&gt;</span> b <span class="pl-k">||</span> a <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (a <span class="pl-k">&lt;</span> b <span class="pl-k">||</span> b <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">left</span>.<span class="pl-c1">index</span> <span class="pl-k">-</span> <span class="pl-smi">right</span>.<span class="pl-c1">index</span>;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-s"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> An internal function used for aggregate &quot;group by&quot; operations.</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">group</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">behavior</span>, <span class="pl-smi">partition</span>) {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> result <span class="pl-k">=</span> partition <span class="pl-k">?</span> [[], []] <span class="pl-k">:</span> {};</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">_</span>.<span class="pl-en">each</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(value, index, obj);</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">behavior</span>(result, value, key);</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Groups the object&#39;s values by a criterion. Pass either a string attribute</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> to group by, or a function that returns the criterion.</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">groupBy</span> <span class="pl-k">=</span> <span class="pl-en">group</span>(<span class="pl-k">function</span>(<span class="pl-smi">result</span>, <span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-c1">has</span>(result, key)) result[key].<span class="pl-c1">push</span>(value); <span class="pl-k">else</span> result[key] <span class="pl-k">=</span> [value];</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Indexes the object&#39;s values by a criterion, similar to `groupBy`, but for</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> when you know that your index values will be unique.</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">indexBy</span> <span class="pl-k">=</span> <span class="pl-en">group</span>(<span class="pl-k">function</span>(<span class="pl-smi">result</span>, <span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">    result[key] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Counts instances of an object that group by a certain criterion. Pass</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> either a string attribute to count by, or a function that returns the</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> criterion.</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">countBy</span> <span class="pl-k">=</span> <span class="pl-en">group</span>(<span class="pl-k">function</span>(<span class="pl-smi">result</span>, <span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-c1">has</span>(result, key)) result[key]<span class="pl-k">++</span>; <span class="pl-k">else</span> result[key] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> reStrSymbol <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\u</span>d80<span class="pl-c1">0-<span class="pl-cce">\u</span></span>dfff]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>d80<span class="pl-c1">0-<span class="pl-cce">\u</span></span>dbff][<span class="pl-cce">\u</span>dc0<span class="pl-c1">0-<span class="pl-cce">\u</span></span>dfff]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>d80<span class="pl-c1">0-<span class="pl-cce">\u</span></span>dfff]</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Safely create a real, live array from anything iterable.</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">toArray</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>obj) <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(obj)) <span class="pl-k">return</span> <span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(obj);</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isString</span>(obj)) {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Keep surrogate pair characters together</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">obj</span>.<span class="pl-c1">match</span>(reStrSymbol);</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isArrayLike</span>(obj)) <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(obj, <span class="pl-smi">_</span>.<span class="pl-smi">identity</span>);</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-c1">values</span>(obj);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the number of elements in an object.</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">size</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">?</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Split a collection into two arrays: one whose elements all satisfy the given</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> predicate, and one whose elements all do not satisfy the predicate.</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">partition</span> <span class="pl-k">=</span> <span class="pl-en">group</span>(<span class="pl-k">function</span>(<span class="pl-smi">result</span>, <span class="pl-smi">value</span>, <span class="pl-smi">pass</span>) {</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">    result[pass <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>].<span class="pl-c1">push</span>(value);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Array Functions</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> ---------------</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Get the first element of an array. Passing **n** will return the first N</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> values in the array. Aliased as `head` and `take`. The **guard** check</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> allows it to work with `_.map`.</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">first</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">head</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">take</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">n</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (array <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (n <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> guard) <span class="pl-k">return</span> array[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">initial</span>(array, <span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> n);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns everything but the last entry of the array. Especially useful on</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the arguments object. Passing **n** will return all the values in</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the array, excluding the last N.</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">initial</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">n</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(array, <span class="pl-c1">0</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> (n <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> guard <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> n)));</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Get the last element of an array. Passing **n** will return the last N</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> values in the array.</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">last</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">n</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (array <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (n <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> guard) <span class="pl-k">return</span> array[<span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">rest</span>(array, <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">array</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> n));</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns everything but the first entry of the array. Aliased as `tail` and `drop`.</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Especially useful on the arguments object. Passing an **n** will return</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the rest N values in the array.</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">rest</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">tail</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">drop</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">n</span>, <span class="pl-smi">guard</span>) {</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(array, n <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> guard <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> n);</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Trim out all falsy values from an array.</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">compact</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">filter</span>(array, <span class="pl-c1">Boolean</span>);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Internal implementation of a recursive `flatten` function.</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">flatten</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>, <span class="pl-smi">shallow</span>, <span class="pl-smi">strict</span>, <span class="pl-smi">output</span>) {</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">    output <span class="pl-k">=</span> output <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> idx <span class="pl-k">=</span> <span class="pl-smi">output</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(input); i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> value <span class="pl-k">=</span> input[i];</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">isArrayLike</span>(value) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(value) <span class="pl-k">||</span> <span class="pl-smi">_</span>.<span class="pl-en">isArguments</span>(value))) {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Flatten current level of array or arguments object.</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (shallow) {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">while</span> (j <span class="pl-k">&lt;</span> len) output[idx<span class="pl-k">++</span>] <span class="pl-k">=</span> value[j<span class="pl-k">++</span>];</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">flatten</span>(value, shallow, strict, output);</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">          idx <span class="pl-k">=</span> <span class="pl-smi">output</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>strict) {</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">        output[idx<span class="pl-k">++</span>] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Flatten out an array, either recursively (by default), or just one level.</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">flatten</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">shallow</span>) {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">flatten</span>(array, shallow, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return a version of the array that does not contain the specified value(s).</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">without</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">otherArrays</span>) {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">difference</span>(array, otherArrays);</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Produce a duplicate-free version of the array. If the array has already</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> been sorted, you have the option of using a faster algorithm.</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `unique`.</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">uniq</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">unique</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">isSorted</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isBoolean</span>(isSorted)) {</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">      context <span class="pl-k">=</span> iteratee;</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> isSorted;</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">      isSorted <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (iteratee <span class="pl-k">!=</span> <span class="pl-c1">null</span>) iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> seen <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(array); i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> value <span class="pl-k">=</span> array[i],</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">          computed <span class="pl-k">=</span> iteratee <span class="pl-k">?</span> <span class="pl-en">iteratee</span>(value, i, array) <span class="pl-k">:</span> value;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (isSorted) {</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>i <span class="pl-k">||</span> seen <span class="pl-k">!==</span> computed) <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(value);</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">        seen <span class="pl-k">=</span> computed;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (iteratee) {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(seen, computed)) {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">seen</span>.<span class="pl-c1">push</span>(computed);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(value);</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(result, value)) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(value);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Produce an array that contains the union: each distinct element from all of</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the passed-in arrays.</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">union</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">arrays</span>) {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">uniq</span>(<span class="pl-en">flatten</span>(arrays, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>));</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Produce an array that contains every item shared between all the</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> passed-in arrays.</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">intersection</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> argsLength <span class="pl-k">=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(array); i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> item <span class="pl-k">=</span> array[i];</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(result, item)) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> j;</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (j <span class="pl-k">=</span> <span class="pl-c1">1</span>; j <span class="pl-k">&lt;</span> argsLength; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(<span class="pl-c1">arguments</span>[j], item)) <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (j <span class="pl-k">===</span> argsLength) <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(item);</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Take the difference between one array and a number of other arrays.</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Only the elements present in just the first array will remain.</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">difference</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">rest</span>) {</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">    rest <span class="pl-k">=</span> <span class="pl-en">flatten</span>(rest, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">filter</span>(array, <span class="pl-k">function</span>(<span class="pl-smi">value</span>){</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(rest, value);</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Complement of _.zip. Unzip accepts an array of arrays and groups</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> each array&#39;s elements on shared indices.</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">unzip</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> array <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">_</span>.<span class="pl-en">max</span>(array, getLength).<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">      result[index] <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">pluck</span>(array, index);</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Zip together multiple lists into a single array -- elements that share</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> an index go together.</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">zip</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-smi">_</span>.<span class="pl-smi">unzip</span>);</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Converts lists into objects. Pass either a single array of `[key, value]`</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> pairs, or two parallel arrays of the same length -- one of keys, and one of</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the corresponding values. Passing by pairs is the reverse of _.pairs.</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">object</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">list</span>, <span class="pl-smi">values</span>) {</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(list); i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (values) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">        result[list[i]] <span class="pl-k">=</span> values[i];</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">        result[list[i][<span class="pl-c1">0</span>]] <span class="pl-k">=</span> list[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generator function to create the findIndex and findLastIndex functions.</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">createPredicateIndexFinder</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">dir</span>) {</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">      predicate <span class="pl-k">=</span> <span class="pl-en">cb</span>(predicate, context);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(array);</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> index <span class="pl-k">=</span> dir <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> length <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (; index <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> index <span class="pl-k">&lt;</span> length; index <span class="pl-k">+=</span> dir) {</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">predicate</span>(array[index], index, array)) <span class="pl-k">return</span> index;</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns the first index on an array-like that passes a predicate test.</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">findIndex</span> <span class="pl-k">=</span> <span class="pl-en">createPredicateIndexFinder</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">findLastIndex</span> <span class="pl-k">=</span> <span class="pl-en">createPredicateIndexFinder</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Use a comparator function to figure out the smallest index at which</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> an object should be inserted so as to maintain order. Uses binary search.</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">sortedIndex</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(obj);</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> low <span class="pl-k">=</span> <span class="pl-c1">0</span>, high <span class="pl-k">=</span> <span class="pl-en">getLength</span>(array);</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (low <span class="pl-k">&lt;</span> high) {</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> mid <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((low <span class="pl-k">+</span> high) <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">iteratee</span>(array[mid]) <span class="pl-k">&lt;</span> value) low <span class="pl-k">=</span> mid <span class="pl-k">+</span> <span class="pl-c1">1</span>; <span class="pl-k">else</span> high <span class="pl-k">=</span> mid;</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> low;</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generator function to create the indexOf and lastIndexOf functions.</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">createIndexFinder</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">dir</span>, <span class="pl-smi">predicateFind</span>, <span class="pl-smi">sortedIndex</span>) {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">item</span>, <span class="pl-smi">idx</span>) {</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-en">getLength</span>(array);</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> idx <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (dir <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">          i <span class="pl-k">=</span> idx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> idx <span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(idx <span class="pl-k">+</span> length, i);</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">          length <span class="pl-k">=</span> idx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(idx <span class="pl-k">+</span> <span class="pl-c1">1</span>, length) <span class="pl-k">:</span> idx <span class="pl-k">+</span> length <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (sortedIndex <span class="pl-k">&amp;&amp;</span> idx <span class="pl-k">&amp;&amp;</span> length) {</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">        idx <span class="pl-k">=</span> <span class="pl-en">sortedIndex</span>(array, item);</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> array[idx] <span class="pl-k">===</span> item <span class="pl-k">?</span> idx <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (item <span class="pl-k">!==</span> item) {</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">        idx <span class="pl-k">=</span> <span class="pl-en">predicateFind</span>(<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(array, i, length), <span class="pl-smi">_</span>.<span class="pl-smi">isNaN</span>);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> idx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> idx <span class="pl-k">+</span> i <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (idx <span class="pl-k">=</span> dir <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> i <span class="pl-k">:</span> length <span class="pl-k">-</span> <span class="pl-c1">1</span>; idx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> idx <span class="pl-k">&lt;</span> length; idx <span class="pl-k">+=</span> dir) {</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (array[idx] <span class="pl-k">===</span> item) <span class="pl-k">return</span> idx;</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return the position of the first occurrence of an item in an array,</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> or -1 if the item is not included in the array.</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> If the array is large and already in sort order, pass `true`</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> for **isSorted** to use binary search.</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">indexOf</span> <span class="pl-k">=</span> <span class="pl-en">createIndexFinder</span>(<span class="pl-c1">1</span>, <span class="pl-smi">_</span>.<span class="pl-smi">findIndex</span>, <span class="pl-smi">_</span>.<span class="pl-smi">sortedIndex</span>);</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">lastIndexOf</span> <span class="pl-k">=</span> <span class="pl-en">createIndexFinder</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-smi">_</span>.<span class="pl-smi">findLastIndex</span>);</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generate an integer Array containing an arithmetic progression. A port of</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> the native Python `range()` function. See</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> [the Python documentation](http://docs.python.org/library/functions.html#range).</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">range</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">start</span>, <span class="pl-smi">stop</span>, <span class="pl-smi">step</span>) {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (stop <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">      stop <span class="pl-k">=</span> start <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">      start <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>step) {</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">      step <span class="pl-k">=</span> stop <span class="pl-k">&lt;</span> start <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((stop <span class="pl-k">-</span> start) <span class="pl-k">/</span> step), <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> range <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> idx <span class="pl-k">=</span> <span class="pl-c1">0</span>; idx <span class="pl-k">&lt;</span> length; idx<span class="pl-k">++</span>, start <span class="pl-k">+=</span> step) {</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">      range[idx] <span class="pl-k">=</span> start;</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> range;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Split an **array** into several arrays containing **count** or less elements</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> of initial array.</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">chunk</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">count</span>) {</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (count <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> count <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">array</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> length) {</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(array, i, i <span class="pl-k">+=</span> count));</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Function (ahem) Functions</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> ------------------</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Determines whether to execute a function as a constructor</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> or a normal function with the provided arguments.</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">executeBound</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">sourceFunc</span>, <span class="pl-smi">boundFunc</span>, <span class="pl-smi">context</span>, <span class="pl-smi">callingContext</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>(callingContext <span class="pl-k">instanceof</span> boundFunc)) <span class="pl-k">return</span> <span class="pl-smi">sourceFunc</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-en">baseCreate</span>(<span class="pl-smi">sourceFunc</span>.<span class="pl-c1">prototype</span>);</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-smi">sourceFunc</span>.<span class="pl-c1">apply</span>(self, args);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(result)) <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> self;</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create a function bound to a given object (assigning `this`, and arguments,</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> optionally). Delegates to **ECMAScript 5**&#39;s native `Function.bind` if</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> available.</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">bind</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">context</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(func)) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bind must be called on a function<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bound <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">callArgs</span>) {</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">executeBound</span>(func, bound, context, <span class="pl-c1">this</span>, <span class="pl-smi">args</span>.<span class="pl-c1">concat</span>(callArgs));</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> bound;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Partially apply a function by creating a version that has had some of its</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> arguments pre-filled, without changing its dynamic `this` context. _ acts</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> as a placeholder by default, allowing any combination of arguments to be</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">partial</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">boundArgs</span>) {</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> placeholder <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">partial</span>.<span class="pl-smi">placeholder</span>;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">bound</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> position <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">boundArgs</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">        args[i] <span class="pl-k">=</span> boundArgs[i] <span class="pl-k">===</span> placeholder <span class="pl-k">?</span> <span class="pl-c1">arguments</span>[position<span class="pl-k">++</span>] <span class="pl-k">:</span> boundArgs[i];</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (position <span class="pl-k">&lt;</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span>) <span class="pl-smi">args</span>.<span class="pl-c1">push</span>(<span class="pl-c1">arguments</span>[position<span class="pl-k">++</span>]);</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">executeBound</span>(func, bound, <span class="pl-c1">this</span>, <span class="pl-c1">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> bound;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">partial</span>.<span class="pl-smi">placeholder</span> <span class="pl-k">=</span> _;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Bind a number of an object&#39;s methods to that object. Remaining arguments</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> are the method names to be bound. Useful for ensuring that all callbacks</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> defined on an object belong to it.</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">bindAll</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">keys</span>) {</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">    keys <span class="pl-k">=</span> <span class="pl-en">flatten</span>(keys, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (index <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bindAll must be passed function names<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (index<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[index];</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">      obj[key] <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">bind</span>(obj[key], obj);</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Memoize an expensive function by storing its results.</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">memoize</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">hasher</span>) {</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">memoize</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> cache <span class="pl-k">=</span> <span class="pl-smi">memoize</span>.<span class="pl-smi">cache</span>;</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> address <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (hasher <span class="pl-k">?</span> <span class="pl-smi">hasher</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span> key);</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">has</span>(cache, address)) cache[address] <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> cache[address];</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">memoize</span>.<span class="pl-smi">cache</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> memoize;</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Delays a function for the given number of milliseconds, and then calls</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> it with the arguments supplied.</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">delay</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">wait</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, args);</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">    }, wait);</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Defers a function, scheduling it to run after the current call stack has</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> cleared.</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-c1">defer</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">partial</span>(<span class="pl-smi">_</span>.<span class="pl-smi">delay</span>, _, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function, that, when invoked, will only be triggered at most once</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> during a given window of time. Normally, the throttled function will run</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> as much as it can, without ever going more than once per `wait` duration;</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> but if you&#39;d like to disable the execution on the leading edge, pass</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> `{leading: false}`. To disable execution on the trailing edge, ditto.</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">throttle</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">wait</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> timeout, context, args, result;</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> previous <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>options) options <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">later</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">      previous <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">leading</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">      timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">      result <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>timeout) context <span class="pl-k">=</span> args <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">throttled</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> now <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>previous <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">options</span>.<span class="pl-smi">leading</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>) previous <span class="pl-k">=</span> now;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> remaining <span class="pl-k">=</span> wait <span class="pl-k">-</span> (now <span class="pl-k">-</span> previous);</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">      context <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">      args <span class="pl-k">=</span> <span class="pl-c1">arguments</span>;</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (remaining <span class="pl-k">&lt;=</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> remaining <span class="pl-k">&gt;</span> wait) {</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (timeout) {</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">          timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">        previous <span class="pl-k">=</span> now;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">        result <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>timeout) context <span class="pl-k">=</span> args <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>timeout <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">options</span>.<span class="pl-smi">trailing</span> <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">        timeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(later, remaining);</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">throttled</span>.<span class="pl-en">cancel</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">      previous <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">      timeout <span class="pl-k">=</span> context <span class="pl-k">=</span> args <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> throttled;</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function, that, as long as it continues to be invoked, will not</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> be triggered. The function will be called after it stops being called for</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> N milliseconds. If `immediate` is passed, trigger the function on the</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> leading edge, instead of the trailing.</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">debounce</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">wait</span>, <span class="pl-smi">immediate</span>) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> timeout, result;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">later</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">context</span>, <span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">      timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (args) result <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(context, args);</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> debounced <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">args</span>) {</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (timeout) <span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (immediate) {</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> callNow <span class="pl-k">=</span> <span class="pl-k">!</span>timeout;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">        timeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(later, wait);</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (callNow) result <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">        timeout <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">delay</span>(later, wait, <span class="pl-c1">this</span>, args);</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">debounced</span>.<span class="pl-en">cancel</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">      timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> debounced;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns the first function passed as an argument to the second,</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> allowing you to adjust arguments, run code before and after, and</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> conditionally execute the original function.</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">wrap</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>, <span class="pl-smi">wrapper</span>) {</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">partial</span>(wrapper, func);</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a negated version of the passed-in predicate.</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">negate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">predicate</span>) {</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">predicate</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function that is the composition of a list of functions, each</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> consuming the return value of the function that follows.</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">compose</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-c1">arguments</span>;</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-smi">args</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> i <span class="pl-k">=</span> start;</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> result <span class="pl-k">=</span> args[start].<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (i<span class="pl-k">--</span>) result <span class="pl-k">=</span> args[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, result);</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function that will only be executed on and after the Nth call.</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">after</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">times</span>, <span class="pl-smi">func</span>) {</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">--</span>times <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function that will only be executed up to (but not including) the Nth call.</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">before</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">times</span>, <span class="pl-smi">func</span>) {</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> memo;</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">--</span>times <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">        memo <span class="pl-k">=</span> <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (times <span class="pl-k">&lt;=</span> <span class="pl-c1">1</span>) func <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> memo;</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a function that will be executed at most one time, no matter how</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> often you call it. Useful for lazy initialization.</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">once</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">partial</span>(<span class="pl-smi">_</span>.<span class="pl-smi">before</span>, <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">restArgs</span> <span class="pl-k">=</span> restArgs;</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Object Functions</span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> ----------------</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Keys in IE &lt; 9 that won&#39;t be iterated by `for key in ...` and thus missed.</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> hasEnumBug <span class="pl-k">=</span> <span class="pl-k">!</span>{toString<span class="pl-k">:</span> <span class="pl-c1">null</span>}.<span class="pl-en">propertyIsEnumerable</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>toString<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> nonEnumerableProps <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>valueOf<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>isPrototypeOf<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>toString<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>propertyIsEnumerable<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hasOwnProperty<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>toLocaleString<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">collectNonEnumProps</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">keys</span>) {</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> nonEnumIdx <span class="pl-k">=</span> <span class="pl-smi">nonEnumerableProps</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">constructor </span>= obj.<span class="pl-en">constructor</span>;</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">    var proto = _.<span class="pl-en">isFunction</span>(<span class="pl-en">constructor</span>) &amp;&amp; constructor.prototype || ObjProto;</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Constructor is a special case.</span></td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">    var prop = &#39;constructor&#39;;</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">    if (_.has(obj, prop) &amp;&amp; !_.contains(keys, prop)) keys.push(prop);</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">    while (nonEnumIdx--) {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">      prop <span class="pl-k">=</span> nonEnumerableProps[nonEnumIdx];</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (prop <span class="pl-k">in</span> obj <span class="pl-k">&amp;&amp;</span> obj[prop] <span class="pl-k">!==</span> proto[prop] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(keys, prop)) {</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">keys</span>.<span class="pl-c1">push</span>(prop);</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Retrieve the names of an object&#39;s own properties.</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Delegates to **ECMAScript 5**&#39;s native `Object.keys`.</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">keys</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(obj)) <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (nativeKeys) <span class="pl-k">return</span> <span class="pl-en">nativeKeys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> obj) <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-c1">has</span>(obj, key)) <span class="pl-smi">keys</span>.<span class="pl-c1">push</span>(key);</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Ahem, IE &lt; 9.</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (hasEnumBug) <span class="pl-en">collectNonEnumProps</span>(obj, keys);</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> keys;</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Retrieve all the property names of an object.</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">allKeys</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(obj)) <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> obj) <span class="pl-smi">keys</span>.<span class="pl-c1">push</span>(key);</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Ahem, IE &lt; 9.</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (hasEnumBug) <span class="pl-en">collectNonEnumProps</span>(obj, keys);</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> keys;</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Retrieve the values of an object&#39;s properties.</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">values</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> values <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">      values[i] <span class="pl-k">=</span> obj[keys[i]];</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> values;</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns the results of applying the iteratee to each element of the object.</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> In contrast to _.map it returns an object.</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">mapObject</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">cb</span>(iteratee, context);</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj),</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">        length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">        results <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> currentKey <span class="pl-k">=</span> keys[index];</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">      results[currentKey] <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(obj[currentKey], currentKey, obj);</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Convert an object into a list of `[key, value]` pairs.</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> The opposite of _.object.</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">pairs</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pairs <span class="pl-k">=</span> <span class="pl-c1">Array</span>(length);</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">      pairs[i] <span class="pl-k">=</span> [keys[i], obj[keys[i]]];</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> pairs;</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Invert the keys and values of an object. The values must be serializable.</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">invert</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">      result[obj[keys[i]]] <span class="pl-k">=</span> keys[i];</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return a sorted list of the function names available on the object.</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Aliased as `methods`.</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">functions</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">methods</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> names <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(obj[key])) <span class="pl-smi">names</span>.<span class="pl-c1">push</span>(key);</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">names</span>.<span class="pl-c1">sort</span>();</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> An internal function for creating assigner functions.</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">createAssigner</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">keysFunc</span>, <span class="pl-smi">defaults</span>) {</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (defaults) obj <span class="pl-k">=</span> <span class="pl-c1">Object</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (length <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> <span class="pl-k">||</span> obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">1</span>; index <span class="pl-k">&lt;</span> length; index<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> source <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[index],</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">            keys <span class="pl-k">=</span> <span class="pl-en">keysFunc</span>(source),</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">            l <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[i];</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>defaults <span class="pl-k">||</span> obj[key] <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>) obj[key] <span class="pl-k">=</span> source[key];</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Extend a given object with all the properties in passed-in object(s).</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">extend</span> <span class="pl-k">=</span> <span class="pl-en">createAssigner</span>(<span class="pl-smi">_</span>.<span class="pl-smi">allKeys</span>);</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Assigns a given object with all the own properties in the passed-in object(s).</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">extendOwn</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-smi">assign</span> <span class="pl-k">=</span> <span class="pl-en">createAssigner</span>(<span class="pl-smi">_</span>.<span class="pl-smi">keys</span>);</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns the first key on an object that passes a predicate test.</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">findKey</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">predicate</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">    predicate <span class="pl-k">=</span> <span class="pl-en">cb</span>(predicate, context);</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj), key;</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">      key <span class="pl-k">=</span> keys[i];</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">predicate</span>(obj[key], key, obj)) <span class="pl-k">return</span> key;</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Internal pick helper function to determine if `obj` has key `key`.</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">keyInObj</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> key <span class="pl-k">in</span> obj;</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return a copy of the object only containing the whitelisted properties.</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">pick</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">keys</span>) {</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> {}, iteratee <span class="pl-k">=</span> keys[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(iteratee)) {</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">keys</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) iteratee <span class="pl-k">=</span> <span class="pl-en">optimizeCb</span>(iteratee, keys[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">      keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">allKeys</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> keyInObj;</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">      keys <span class="pl-k">=</span> <span class="pl-en">flatten</span>(keys, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> <span class="pl-c1">Object</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[i];</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> value <span class="pl-k">=</span> obj[key];</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">iteratee</span>(value, key, obj)) result[key] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return a copy of the object without the blacklisted properties.</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">omit</span> <span class="pl-k">=</span> <span class="pl-en">restArgs</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">keys</span>) {</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> iteratee <span class="pl-k">=</span> keys[<span class="pl-c1">0</span>], context;</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(iteratee)) {</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">      iteratee <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">negate</span>(iteratee);</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">keys</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) context <span class="pl-k">=</span> keys[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">      keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">map</span>(<span class="pl-en">flatten</span>(keys, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>), <span class="pl-c1">String</span>);</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">iteratee</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-c1">contains</span>(keys, key);</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">pick</span>(obj, iteratee, context);</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Fill in a given object with default properties.</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">defaults</span> <span class="pl-k">=</span> <span class="pl-en">createAssigner</span>(<span class="pl-smi">_</span>.<span class="pl-smi">allKeys</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Creates an object that inherits from the given prototype object.</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> If additional properties are provided then they will be added to the</span></td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> created object.</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">create</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">prototype</span>, <span class="pl-smi">props</span>) {</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-en">baseCreate</span>(prototype);</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (props) <span class="pl-smi">_</span>.<span class="pl-en">extendOwn</span>(result, props);</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create a (shallow-cloned) duplicate of an object.</span></td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">clone</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isObject</span>(obj)) <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(obj) <span class="pl-k">?</span> <span class="pl-smi">obj</span>.<span class="pl-c1">slice</span>() <span class="pl-k">:</span> <span class="pl-smi">_</span>.<span class="pl-en">extend</span>({}, obj);</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Invokes interceptor with the obj, and then returns obj.</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> The primary purpose of this method is to &quot;tap into&quot; a method chain, in</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> order to perform operations on intermediate results within the chain.</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">tap</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">interceptor</span>) {</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">interceptor</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns whether an object has a given set of `key:value` pairs.</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isMatch</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">object</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(attrs), length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (object <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-k">!</span>length;</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> obj <span class="pl-k">=</span> <span class="pl-c1">Object</span>(object);</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[i];</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (attrs[key] <span class="pl-k">!==</span> obj[key] <span class="pl-k">||</span> <span class="pl-k">!</span>(key <span class="pl-k">in</span> obj)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Internal recursive comparison function for `isEqual`.</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">eq</span>, <span class="pl-smi">deepEq</span>;</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">eq</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">aStack</span>, <span class="pl-smi">bStack</span>) {</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Identical objects are equal. `0 === -0`, but they aren&#39;t identical.</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (a <span class="pl-k">===</span> b) <span class="pl-k">return</span> a <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> a <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> b;</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> `null` or `undefined` only equal to itself (strict comparison).</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (a <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> b <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> `NaN`s are equivalent, but non-reflexive.</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (a <span class="pl-k">!==</span> a) <span class="pl-k">return</span> b <span class="pl-k">!==</span> b;</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Exhaust primitive checks</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-k">typeof</span> a;</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (type <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> b <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">deepEq</span>(a, b, aStack, bStack);</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Internal recursive comparison function for `isEqual`.</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">deepEq</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">aStack</span>, <span class="pl-smi">bStack</span>) {</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Unwrap any wrapped objects.</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (a <span class="pl-k">instanceof</span> _) a <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">_wrapped</span>;</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (b <span class="pl-k">instanceof</span> _) b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-smi">_wrapped</span>;</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Compare `[[Class]]` names.</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> className <span class="pl-k">=</span> <span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(a);</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (className <span class="pl-k">!==</span> <span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(b)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">switch</span> (className) {</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Strings, numbers, regular expressions, dates, and booleans are compared by value.</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object RegExp]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> RegExps are coerced to strings for comparison (Note: &#39;&#39; + /a/i === &#39;/a/i&#39;)</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object String]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Primitives and their corresponding object wrappers are equivalent; thus, `&quot;5&quot;` is</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> equivalent to `new String(&quot;5&quot;)`.</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> a <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> b;</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Number]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> `NaN`s are equivalent, but non-reflexive.</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Object(NaN) is equivalent to NaN.</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">+</span>a <span class="pl-k">!==</span> <span class="pl-k">+</span>a) <span class="pl-k">return</span> <span class="pl-k">+</span>b <span class="pl-k">!==</span> <span class="pl-k">+</span>b;</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> An `egal` comparison is performed for other numeric values.</span></td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">+</span>a <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-k">+</span>a <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> b <span class="pl-k">:</span> <span class="pl-k">+</span>a <span class="pl-k">===</span> <span class="pl-k">+</span>b;</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Date]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Boolean]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Coerce dates and booleans to numeric primitive values. Dates are compared by their</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> millisecond representations. Note that invalid dates with millisecond representations</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> of `NaN` are not equivalent.</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">+</span>a <span class="pl-k">===</span> <span class="pl-k">+</span>b;</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Symbol]<span class="pl-pds">&#39;</span></span>:</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">SymbolProto</span>.<span class="pl-smi">valueOf</span>.<span class="pl-c1">call</span>(a) <span class="pl-k">===</span> <span class="pl-smi">SymbolProto</span>.<span class="pl-smi">valueOf</span>.<span class="pl-c1">call</span>(b);</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> areArrays <span class="pl-k">=</span> className <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Array]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>areArrays) {</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> a <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> b <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Objects with different constructors are not equivalent, but `Object`s or `Array`s</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> from different frames are.</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> aCtor <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">constructor</span>, bCtor <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">constructor</span>;</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (aCtor <span class="pl-k">!==</span> bCtor <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(aCtor) <span class="pl-k">&amp;&amp;</span> aCtor <span class="pl-k">instanceof</span> aCtor <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">                               <span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(bCtor) <span class="pl-k">&amp;&amp;</span> bCtor <span class="pl-k">instanceof</span> bCtor)</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">                          <span class="pl-k">&amp;&amp;</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>constructor<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> a <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&#39;</span>constructor<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> b)) {</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Assume equality for cyclic structures. The algorithm for detecting cyclic</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Initializing stack of traversed objects.</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> It&#39;s done here since we only need them for objects and arrays comparison.</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">    aStack <span class="pl-k">=</span> aStack <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">    bStack <span class="pl-k">=</span> bStack <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">aStack</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (length<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Linear search. Performance is inversely proportional to the number of</span></td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> unique nested structures.</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (aStack[length] <span class="pl-k">===</span> a) <span class="pl-k">return</span> bStack[length] <span class="pl-k">===</span> b;</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Add the first object to the stack of traversed objects.</span></td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">aStack</span>.<span class="pl-c1">push</span>(a);</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bStack</span>.<span class="pl-c1">push</span>(b);</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Recursively compare objects and arrays.</span></td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (areArrays) {</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Compare array lengths to determine if a deep comparison is necessary.</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">      length <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (length <span class="pl-k">!==</span> <span class="pl-smi">b</span>.<span class="pl-c1">length</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Deep compare the contents, ignoring non-numeric properties.</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (length<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">eq</span>(a[length], b[length], aStack, bStack)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Deep compare objects.</span></td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(a), key;</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">      length <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Ensure that both objects contain the same number of properties before comparing deep equality.</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(b).<span class="pl-c1">length</span> <span class="pl-k">!==</span> length) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span> (length<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Deep compare each member</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">        key <span class="pl-k">=</span> keys[length];</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">_</span>.<span class="pl-c1">has</span>(b, key) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">eq</span>(a[key], b[key], aStack, bStack))) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Remove the first object from the stack of traversed objects.</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">aStack</span>.<span class="pl-c1">pop</span>();</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">bStack</span>.<span class="pl-c1">pop</span>();</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Perform a deep comparison to check if two objects are equal.</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isEqual</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">eq</span>(a, b);</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given array, string, or object empty?</span></td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> An &quot;empty&quot; object has no enumerable own-properties.</span></td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isEmpty</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isArrayLike</span>(obj) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(obj) <span class="pl-k">||</span> <span class="pl-smi">_</span>.<span class="pl-en">isString</span>(obj) <span class="pl-k">||</span> <span class="pl-smi">_</span>.<span class="pl-en">isArguments</span>(obj))) <span class="pl-k">return</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(obj).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given value a DOM element?</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isElement</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">!!</span>(obj <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">obj</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given value an array?</span></td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Delegates to ECMA5&#39;s native Array.isArray</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">isArray</span> <span class="pl-k">=</span> <span class="pl-smi">nativeIsArray</span> <span class="pl-k">||</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Array]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given variable an object?</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isObject</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-k">typeof</span> obj;</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!!</span>obj;</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">each</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>Arguments<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Function<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>String<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Number<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Date<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>RegExp<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Error<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Symbol<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Map<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>WeakMap<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Set<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>WeakSet<span class="pl-pds">&#39;</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">    _[<span class="pl-s"><span class="pl-pds">&#39;</span>is<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Define a fallback version of the method in browsers (ahem, IE &lt; 9), where</span></td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> there isn&#39;t any inspectable &quot;Arguments&quot; type.</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArguments</span>(<span class="pl-c1">arguments</span>)) {</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">isArguments</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-c1">has</span>(obj, <span class="pl-s"><span class="pl-pds">&#39;</span>callee<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).</span></td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">nodelist</span> <span class="pl-k">=</span> <span class="pl-smi">root</span>.<span class="pl-smi">document</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">root</span>.<span class="pl-smi">document</span>.<span class="pl-c1">childNodes</span>;</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-k">/</span>.<span class="pl-k">/</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">Int8Array</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> nodelist <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">isFunction</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">typeof</span> obj <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given object a finite number?</span></td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isFinite</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isSymbol</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-c1">parseFloat</span>(obj));</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is the given value `NaN`?</span></td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isNaN</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isNumber</span>(obj) <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isNaN</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given value a boolean?</span></td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isBoolean</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">||</span> obj <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">||</span> <span class="pl-smi">toString</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Boolean]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given value equal to null?</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isNull</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj <span class="pl-k">===</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Is a given variable undefined?</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">isUndefined</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Shortcut function for checking if an object has a given property directly</span></td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> on itself (in other words, not on a prototype).</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">has</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(path)) {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> obj <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(obj, path);</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> path[i];</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(obj, key)) {</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> obj[key];</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">!!</span>length;</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Utility Functions</span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> -----------------</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Run Underscore.js in *noConflict* mode, returning the `_` variable to its</span></td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> previous owner. Returns a reference to the Underscore object.</span></td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">noConflict</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">root</span>.<span class="pl-smi">_</span> <span class="pl-k">=</span> previousUnderscore;</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Keep the identity function around for default iteratees.</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">identity</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Predicate-generating functions. Often useful outside of Underscore.</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">constant</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">noop</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){};</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">property</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(path)) {</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">shallowProperty</span>(path);</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">deepGet</span>(obj, path);</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generates a function for a given object that returns a given property.</span></td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">propertyOf</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">function</span>(){};</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(path) <span class="pl-k">?</span> obj[path] <span class="pl-k">:</span> <span class="pl-en">deepGet</span>(obj, path);</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Returns a predicate for checking whether an object has a given set of</span></td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> `key:value` pairs.</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">matcher</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">matches</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">    attrs <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">extendOwn</span>({}, attrs);</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isMatch</span>(obj, attrs);</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Run a function **n** times.</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">times</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">n</span>, <span class="pl-smi">iteratee</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> accum <span class="pl-k">=</span> <span class="pl-c1">Array</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, n));</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">    iteratee <span class="pl-k">=</span> <span class="pl-en">optimizeCb</span>(iteratee, context, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> n; i<span class="pl-k">++</span>) accum[i] <span class="pl-k">=</span> <span class="pl-en">iteratee</span>(i);</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> accum;</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Return a random integer between min and max (inclusive).</span></td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">random</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">min</span>, <span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (max <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">      max <span class="pl-k">=</span> min;</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">      min <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> min <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> (max <span class="pl-k">-</span> min <span class="pl-k">+</span> <span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> A (possibly faster) way to get the current timestamp as an integer.</span></td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">now</span> <span class="pl-k">=</span> <span class="pl-c1">Date</span>.<span class="pl-smi">now</span> <span class="pl-k">||</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> List of HTML entities for escaping.</span></td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">escapeMap</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;quot;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#x27;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>`<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#x60;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">unescapeMap</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">invert</span>(escapeMap);</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Functions for escaping and unescaping strings to/from HTML interpolation.</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">createEscaper</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">map</span>) {</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">escaper</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">match</span>) {</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> map[match];</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Regexes for identifying a key that needs to be escaped.</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> source <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(?:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">_</span>.<span class="pl-c1">keys</span>(map).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> testRegexp <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>(source);</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> replaceRegexp <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>(source, <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">string</span>) {</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">      string <span class="pl-k">=</span> string <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> string;</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">testRegexp</span>.<span class="pl-c1">test</span>(string) <span class="pl-k">?</span> <span class="pl-smi">string</span>.<span class="pl-c1">replace</span>(replaceRegexp, escaper) <span class="pl-k">:</span> string;</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">escape</span> <span class="pl-k">=</span> <span class="pl-en">createEscaper</span>(escapeMap);</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">unescape</span> <span class="pl-k">=</span> <span class="pl-en">createEscaper</span>(unescapeMap);</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Traverses the children of `obj` along `path`. If a child is a function, it</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> is invoked with its parent as context. Returns the value of the final</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> child, or `fallback` if any child is undefined.</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">result</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">path</span>, <span class="pl-smi">fallback</span>) {</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">_</span>.<span class="pl-en">isArray</span>(path)) path <span class="pl-k">=</span> [path];</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>length) {</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(fallback) <span class="pl-k">?</span> <span class="pl-smi">fallback</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">:</span> fallback;</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> length; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> prop <span class="pl-k">=</span> obj <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-k">void</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> obj[path[i]];</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (prop <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">        prop <span class="pl-k">=</span> fallback;</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">        i <span class="pl-k">=</span> length; <span class="pl-c"><span class="pl-c">//</span> Ensure we don&#39;t continue iterating.</span></td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">      obj <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">isFunction</span>(prop) <span class="pl-k">?</span> <span class="pl-smi">prop</span>.<span class="pl-c1">call</span>(obj) <span class="pl-k">:</span> prop;</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generate a unique integer id (unique within the entire client session).</span></td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Useful for temporary DOM ids.</span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">idCounter</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">uniqueId</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">prefix</span>) {</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-k">++</span>idCounter <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> prefix <span class="pl-k">?</span> prefix <span class="pl-k">+</span> id <span class="pl-k">:</span> id;</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> By default, Underscore uses ERB-style template delimiters, change the</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> following template settings to use alternative delimiters.</span></td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-smi">templateSettings</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">    evaluate<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>&lt;%(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)%&gt;<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">    interpolate<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>&lt;%=(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)%&gt;<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">    escape<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>&lt;%-(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)%&gt;<span class="pl-pds">/</span>g</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> When customizing `templateSettings`, if you don&#39;t want to define an</span></td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> interpolation, evaluation or escaping regex, we need one that is</span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> guaranteed not to match.</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">noMatch</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">.</span>)<span class="pl-k">^</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Certain characters need to be escaped so that they can be put into a</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> string literal.</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">escapes</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\r</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u2028</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>u2028<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u2029</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>u2029<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-smi">escapeRegExp</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\\</span><span class="pl-k">|</span>&#39;<span class="pl-k">|</span><span class="pl-c1">\r</span><span class="pl-k">|</span><span class="pl-c1">\n</span><span class="pl-k">|</span><span class="pl-cce">\u</span>2028<span class="pl-k">|</span><span class="pl-cce">\u</span>2029<span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">escapeChar</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">match</span>) {</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> escapes[match];</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> JavaScript micro-templating, similar to John Resig&#39;s implementation.</span></td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Underscore templating handles arbitrary delimiters, preserves whitespace,</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> and correctly escapes quotes within interpolated code.</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> NB: `oldSettings` only exists for backwards compatibility.</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">template</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>, <span class="pl-smi">settings</span>, <span class="pl-smi">oldSettings</span>) {</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>settings <span class="pl-k">&amp;&amp;</span> oldSettings) settings <span class="pl-k">=</span> oldSettings;</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">    settings <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-en">defaults</span>({}, settings, <span class="pl-smi">_</span>.<span class="pl-smi">templateSettings</span>);</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Combine delimiters into one regular expression via alternation.</span></td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> matcher <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>([</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">      (<span class="pl-smi">settings</span>.<span class="pl-smi">escape</span> <span class="pl-k">||</span> noMatch).<span class="pl-c1">source</span>,</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">      (<span class="pl-smi">settings</span>.<span class="pl-smi">interpolate</span> <span class="pl-k">||</span> noMatch).<span class="pl-c1">source</span>,</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">      (<span class="pl-smi">settings</span>.<span class="pl-smi">evaluate</span> <span class="pl-k">||</span> noMatch).<span class="pl-c1">source</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">    ].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|$<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Compile the template source, escaping string literals appropriately.</span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> source <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>__p+=&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">text</span>.<span class="pl-c1">replace</span>(matcher, <span class="pl-k">function</span>(<span class="pl-smi">match</span>, <span class="pl-smi">escape</span>, <span class="pl-smi">interpolate</span>, <span class="pl-smi">evaluate</span>, <span class="pl-smi">offset</span>) {</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">      source <span class="pl-k">+=</span> <span class="pl-smi">text</span>.<span class="pl-c1">slice</span>(index, offset).<span class="pl-c1">replace</span>(escapeRegExp, escapeChar);</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">      index <span class="pl-k">=</span> offset <span class="pl-k">+</span> <span class="pl-smi">match</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (escape) {</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">        source <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;+<span class="pl-cce">\n</span>((__t=(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> escape <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>))==null?&#39;&#39;:_.escape(__t))+<span class="pl-cce">\n</span>&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (interpolate) {</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">        source <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;+<span class="pl-cce">\n</span>((__t=(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> interpolate <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>))==null?&#39;&#39;:__t)+<span class="pl-cce">\n</span>&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (evaluate) {</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">        source <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> evaluate <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span>__p+=&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Adobe VMs need the match returned to produce the correct offset.</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> match;</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">    source <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If a variable is not specified, place data values in local scope.</span></td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">variable</span>) source <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>with(obj||{}){<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> source <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>}<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">    source <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>var __t,__p=&#39;&#39;,__j=Array.prototype.join,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&quot;</span>print=function(){__p+=__j.call(arguments,&#39;&#39;);};<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">      source <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>return __p;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> render;</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">      render <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Function</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">variable</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>obj<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>, source);</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">e</span>.<span class="pl-c1">source</span> <span class="pl-k">=</span> source;</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> e;</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">template</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">render</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, data, _);</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Provide the compiled source as a convenience for precompilation.</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> argument <span class="pl-k">=</span> <span class="pl-smi">settings</span>.<span class="pl-smi">variable</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>obj<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">template</span>.<span class="pl-c1">source</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> argument <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>){<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> source <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> template;</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add a &quot;chain&quot; function. Start chaining a wrapped Underscore object.</span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">chain</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> instance <span class="pl-k">=</span> <span class="pl-en">_</span>(obj);</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">instance</span>.<span class="pl-smi">_chain</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> instance;</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> OOP</span></td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> ---------------</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> If Underscore is called as a function, it returns a wrapped object that</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> can be used OO-style. This wrapper holds altered versions of all the</span></td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> underscore functions. Wrapped objects may be chained.</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Helper function to continue chaining intermediate results.</span></td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">chainResult</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">instance</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">instance</span>.<span class="pl-smi">_chain</span> <span class="pl-k">?</span> <span class="pl-en">_</span>(obj).<span class="pl-en">chain</span>() <span class="pl-k">:</span> obj;</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add your own custom functions to the Underscore object.</span></td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">mixin</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">_</span>.<span class="pl-en">functions</span>(obj), <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> func <span class="pl-k">=</span> _[name] <span class="pl-k">=</span> obj[name];</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>[name] <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> args <span class="pl-k">=</span> [<span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span>];</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(args, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">chainResult</span>(<span class="pl-c1">this</span>, <span class="pl-smi">func</span>.<span class="pl-c1">apply</span>(_, args));</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> _;</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add all of the Underscore functions to the wrapper object.</span></td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">mixin</span>(_);</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add all mutator Array functions to the wrapper.</span></td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">each</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>pop<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>push<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>reverse<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>shift<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>sort<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>splice<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>unshift<span class="pl-pds">&#39;</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> method <span class="pl-k">=</span> ArrayProto[name];</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>[name] <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> obj <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span>;</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">method</span>.<span class="pl-c1">apply</span>(obj, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> ((name <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shift<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> name <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>splice<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">obj</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">delete</span> obj[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">chainResult</span>(<span class="pl-c1">this</span>, obj);</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Add all accessor Array functions to the wrapper.</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-en">each</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>concat<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>join<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slice<span class="pl-pds">&#39;</span></span>], <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> method <span class="pl-k">=</span> ArrayProto[name];</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>[name] <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">chainResult</span>(<span class="pl-c1">this</span>, <span class="pl-smi">method</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span>, <span class="pl-c1">arguments</span>));</td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Extracts the result from a wrapped and chained object.</span></td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">value</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span>;</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Provide unwrapping proxy for some methods used in engine operations</span></td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> such as arithmetic and JSON stringification.</span></td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">valueOf</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toJSON</span> <span class="pl-k">=</span> <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">_</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">String</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_wrapped</span>);</td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> AMD registration happens at the end for compatibility with AMD loaders</span></td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> that may not enforce next-turn semantics on modules. Even though general</span></td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> practice for AMD registration is to be anonymous, underscore registers</span></td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> as a named module because, like jQuery, it is a base library that is</span></td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> popular enough to be bundled in a third party lib, but not be part of</span></td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> an AMD load request. Those cases could generate an error when an</span></td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> anonymous define() is called outside of a loader request.</span></td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) {</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>underscore<span class="pl-pds">&#39;</span></span>, [], <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> _;</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">}());</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.28156s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-X+Q/xqnlEgxCczSjjpp2AUGGgqM5gcBzhRQ0p+EAUEk=" src="https://assets-cdn.github.com/assets/frameworks-5fe43fc6a9e5120c427334a38e9a7601418682a33981c073851434a7e1005049.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-AXqRaXtEjo0SExzO6eDFxoQOzb8MZppSrXQAEi3tDJo=" src="https://assets-cdn.github.com/assets/github-017a91697b448e8d12131ccee9e0c5c6840ecdbf0c669a52ad7400122ded0c9a.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

