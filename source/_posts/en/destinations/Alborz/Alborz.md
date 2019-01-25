---
layout: post
title: "Alborz"
excerpt: Alborz Province was formed by division of Tehran Province into two provinces, after the Parliamentary approval on June 23, 2010, and was introduced as 31st province of Iran. Alborz Province is the smallest province of Iran.
collection:
  - Destinations
category: province
tags:
weather: "https://forecast7.com/en/35d6951d39/tehran/"
weather-theme: "weather_one"
weather-name: "Alborz Province"
map:
image-bg: https://loremflickr.com/1020/720/iran
image-sm: https://loremflickr.com/400/400/iran
---
{% include partials/weather.html %}
# **Introduction:**

Alborz Province is one of the 31 provinces of Iran, centered in Karaj. Alborz Province was formed by division of Tehran Province into two provinces, after the Parliamentary approval on June 23, 2010, and was introduced as 31st province of Iran. Alborz Province is the smallest province of Iran.

<!--CARDS WRAPPER-->
<section class="uk-section uk-section-small uk-section-default uk-padding-remove-bottom" data-uk-filter="target: .js-filter">
    <div class="uk-container uk-container-expand uk-margin-large-bottom">
        <ul class="uk-subnav uk-subnav-pill">
            <li class="uk-active" data-uk-filter-control><a href="#">Show All</a></li>
            <li data-uk-filter-control=".province-card"><a href="#">Counties</a></li>
            <li data-uk-filter-control=".county-card"><a href="#">Spots</a></li>
            <li data-uk-filter-control=".city-card"><a href="#">Activites</a></li>
            <li data-uk-filter-control=".village-card"><a href="#">Events</a></li>
        </ul>
        <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-6@xl uk-grid-match js-filter" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
            
          {% assign counties = site.destinations | where:"category", "province" %}
          {% assign provinces = site.destinations | where:"category", "county" | where:"province","Alborz" %}

            <!-- card -->
            {% for province in provinces %}

            <div class="province-card">
                <div class="uk-card uk-card-small uk-card-default">
                    <div class="uk-card-header">
                        <div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
                            <div class="uk-width-expand">
                                <span class="cat-txt">Province</span>
                            </div>
                            <div class="uk-width-auto uk-text-right uk-text-muted">
                                <span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-media">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <img class="lazy" data-src="{{province.image-bg}}" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                                <span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
                            </div>
                        </div>
                        
                    </div>
                    <div class="uk-card-body">
                        <h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">{{province.title}}</h6>
                        <p class="uk-text-small uk-text-muted">{{province.excerpt}}</p>
                    </div>
                    <div class="uk-card-footer">
                        <div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
                            <div class="uk-width-expand uk-text-small">
                                John Doe
                            </div>
                            <div class="uk-width-auto uk-text-right">
                                <a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
                                <a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
                                <a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
                                <a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
                            </div>
                            <div class="uk-width-auto uk-text-right">
                                <a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
                        <!-- card -->
                        {% for county in counties %}

                        <div class="county-card">
                            <div class="uk-card uk-card-small uk-card-default">
                                <div class="uk-card-header">
                                    <div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
                                        <div class="uk-width-expand">
                                            <span class="cat-txt">County</span>
                                        </div>
                                        <div class="uk-width-auto uk-text-right uk-text-muted">
                                            <span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-card-media">
                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                        <img class="lazy" data-src="{{county.image-bg}}" data-width="400" data-height="300" data-uk-img alt="" src="img/transp.gif">
                                        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                                            <span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="uk-card-body">
                                    <h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">{{county.title}}</h6>
                                    <p class="uk-text-small uk-text-muted">{{county.excerpt}}</p>
                                </div>
                                <div class="uk-card-footer">
                                    <div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
                                        <div class="uk-width-expand uk-text-small">
                                            John Doe
                                        </div>
                                        <div class="uk-width-auto uk-text-right">
                                            <a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
                                            <a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
                                            <a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
                                            <a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
                                        </div>
                                        <div class="uk-width-auto uk-text-right">
                                            <a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {% endfor %}
        </div>
        </div>
     </section> 

