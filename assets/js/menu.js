(function () {
  'use strict';

  var WHATSAPP_COMBO =
    'https://wa.me/918805348821?text=Hi%20Kaps%20Caf%C3%A9!%20I%20want%20to%20know%20about%20combo%20meals.';

  var MENU_TABS = [
    {
      id: 'snacks',
      label: 'Snacks and Sides',
      sections: [
        {
          header: 'Hot and Crispy Snacks — Veg',
          items: [
            { name: 'Aloo Tikki', diet: 'veg', desc: '3 pcs / 6 pcs', price: '₹100 / ₹180' },
            { name: 'Veg Cheese Nuggets', diet: 'veg', desc: '6 pcs / 12 pcs', price: '₹120 / ₹200' },
            { name: 'Potato Garlic Balls', diet: 'veg', desc: '15 pcs / 30 pcs', price: '₹150 / ₹250' }
          ]
        },
        {
          header: 'Hot and Crispy Snacks — Non Veg',
          items: [
            { name: 'Chicken Nuggets', diet: 'nonveg', desc: '6 pcs', price: '₹150' },
            { name: 'Chicken Tender', diet: 'nonveg', desc: '4 pcs', price: '₹150' },
            { name: 'Chicken Cheese Nuggets', diet: 'nonveg', desc: '4 pcs', price: '₹120' },
            { name: 'Chicken Popcorn', diet: 'nonveg', desc: '15 pcs', price: '₹150' },
            { name: 'Seekh Kabab', diet: 'nonveg', desc: '2 pcs', price: '₹100' }
          ]
        },
        {
          header: 'Fries',
          items: [
            { name: 'French Fries Salted', diet: 'veg', price: '₹90 small / ₹120 large' },
            { name: 'Peri Peri Fries', diet: 'veg', price: '₹120 small / ₹150 large' },
            { name: 'Masala French Fries', diet: 'veg', price: '₹100 small / ₹130 large' },
            { name: 'Cheesy Fries', diet: 'veg', price: '₹140 small / ₹180 large' },
            { name: 'Peri Peri Cheesy Fries', diet: 'veg', price: '₹160 small / ₹190 large' }
          ]
        },
        {
          header: 'Wings',
          items: [
            {
              name: 'Tandoori Wings',
              diet: 'nonveg',
              price: '₹150 · 4 pcs / ₹220 · 6 pcs / ₹350 · 10 pcs'
            },
            {
              name: 'Barbeque Wings',
              diet: 'nonveg',
              price: '₹150 · 4 pcs / ₹220 · 6 pcs / ₹350 · 10 pcs'
            },
            {
              name: 'KFC Wings',
              diet: 'nonveg',
              price: '₹180 · 4 pcs / ₹250 · 6 pcs / ₹380 · 10 pcs'
            },
            {
              name: 'Hot and Spicy Wings',
              diet: 'nonveg',
              price: '₹210 · 4 pcs / ₹280 · 6 pcs / ₹400 · 10 pcs'
            },
            { name: 'Extra Dip', diet: 'veg', price: '₹25' }
          ]
        }
      ]
    },
    {
      id: 'burgers',
      label: 'Burgers',
      sections: [
        {
          header: 'Veg Burger',
          items: [
            { name: 'Aloo Tikki Burger', diet: 'veg', price: '₹70' },
            { name: 'Aloo Tikki Cheese Burger', diet: 'veg', price: '₹90' },
            { name: 'Veg Burger', diet: 'veg', price: '₹100' },
            { name: 'Veg Cheese Burger', diet: 'veg', price: '₹120' },
            { name: 'Veg Schezwan Burger', diet: 'veg', price: '₹110' },
            { name: 'Veg Masala Burger', diet: 'veg', price: '₹110' },
            { name: 'Paneer Burger', diet: 'veg', price: '₹130' },
            { name: 'Paneer Cheese Burger', diet: 'veg', price: '₹150' },
            { name: 'Veg Cheese Schezwan Burger', diet: 'veg', price: '₹130' },
            { name: 'Veg Cheese Masala Burger', diet: 'veg', price: '₹130' },
            { name: 'Veg Double Deck Burger', diet: 'veg', price: '₹180' },
            { name: 'Kaps Special Burger', diet: 'veg', price: '₹180' }
          ]
        },
        {
          header: 'Non Veg Burger',
          items: [
            { name: 'Chicken Smacker Burger', diet: 'nonveg', price: '₹85' },
            { name: 'Chicken Pops Burger', diet: 'nonveg', price: '₹70' },
            { name: 'Chicken Burger', diet: 'nonveg', price: '₹80' },
            { name: 'Chicken Cheese Burger', diet: 'nonveg', price: '₹100' },
            { name: 'Chicken Spicy Burger', diet: 'nonveg', price: '₹100' },
            { name: 'Chicken Cheese Spicy Burger', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Double Deck Burger', diet: 'nonveg', price: '₹180' },
            { name: 'Chicken Schezwan Burger', diet: 'nonveg', price: '₹100' },
            { name: 'Chicken Cheese Schezwan Burger', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Cheese Pops Burger', diet: 'nonveg', price: '₹90' }
          ]
        },
        {
          header: 'Delicious Chicken Burger',
          items: [
            { name: 'Chicken Kheema Burger', diet: 'nonveg', price: '₹130' },
            { name: 'Chicken Shawarma Burger', diet: 'nonveg', price: '₹130' },
            { name: 'Chicken Tandoori Tikka Burger', diet: 'nonveg', price: '₹140' },
            { name: 'Crispy Chicken Burger', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Cheese Burst Burger', diet: 'nonveg', price: '₹160' }
          ]
        }
      ]
    },
    {
      id: 'pizza',
      label: 'Pizza',
      sections: [
        {
          header: 'Veg Pizza',
          items: [
            { name: 'Onion Cheese Pizza', diet: 'veg', desc: 'Only Onion', price: '₹200' },
            { name: 'Capsicum Cheese Pizza', diet: 'veg', desc: 'Only Capsicum', price: '₹200' },
            { name: 'American Corn Cheese Pizza', diet: 'veg', desc: 'Corn, Chilly Flakes', price: '₹200' },
            { name: 'Margherita Pizza', diet: 'veg', desc: 'Only Cheese, Tomato', price: '₹220' },
            { name: 'Only Cheese Pizza', diet: 'veg', desc: 'Only Cheese, Chilly Flakes', price: '₹220' },
            { name: 'Veg Hut Pizza', diet: 'veg', desc: 'Onion, Tomato, Capsicum', price: '₹240' },
            { name: 'Fresh Farm Pizza', diet: 'veg', desc: 'Onion, Capsicum, Tomato, Corn, Olives', price: '₹250' },
            { name: 'Pepperoni Pizza Spicy', diet: 'veg', desc: 'Onion, Capsicum, Jalapeno, Red Paprika', price: '₹260' },
            { name: 'Paneer Tikka Pizza', diet: 'veg', desc: 'Onion, Tomato, Capsicum, Paneer Tikka', price: '₹280' },
            { name: 'Paneer Corn Cheese Pizza', diet: 'veg', desc: 'Onion, Capsicum, Tomato, Corn, Paneer, Olives', price: '₹280' },
            { name: 'Spicy Paneer Cheese Pizza', diet: 'veg', desc: 'Onion, Capsicum, Spicy Paneer, Red Paprika', price: '₹280' },
            {
              name: 'Mexican Pizza',
              diet: 'veg',
              desc: 'Onion, Capsicum, Tomato, Red Salsa, Red Paprika, Corn, Olives, Jalapeno',
              price: '₹300'
            }
          ]
        },
        {
          header: 'Non Veg Pizza',
          items: [
            { name: 'Chicken Pizza', diet: 'nonveg', desc: 'Only Chicken', price: '₹230' },
            { name: 'Chicken Cheese Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Chicken', price: '₹250' },
            { name: 'Spicy Chicken Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Spicy Chicken, Red Paprika', price: '₹260' },
            { name: 'Chicken Tikka Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Chicken Tikka, Jalapeno', price: '₹280' },
            { name: 'Chicken Tandoor Tikka Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Chicken Tikka, Red Paprika', price: '₹280' },
            { name: 'Chicken BBQ Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Chicken BBQ, Olives', price: '₹280' },
            { name: 'Chicken Seekh Kabab Pizza', diet: 'nonveg', desc: 'Onion, Capsicum, Seekh Kabab', price: '₹280' },
            {
              name: 'Chicken Loaded Pizza',
              diet: 'nonveg',
              desc: 'Onion, Capsicum, Chicken Tikka, Seekh Kabab, Corn, Olives, Jalapeno, Paprika',
              price: '₹320'
            },
            {
              name: 'Mexican Salsa Chicken Pizza',
              diet: 'nonveg',
              desc: 'Onion, Capsicum, Tomato, Chicken Salsa, Mayo, Olives, Red Paprika, Jalapeno',
              price: '₹350'
            }
          ]
        }
      ]
    },
    {
      id: 'momos',
      label: 'Momos and Wraps',
      sections: [
        {
          header: 'Veg Momos',
          items: [
            { name: 'Veg Momos', diet: 'veg', price: '₹100' },
            { name: 'Veg Peri Peri Momos', diet: 'veg', price: '₹120' },
            { name: 'Corn Cheese Momos', diet: 'veg', price: '₹130' },
            { name: 'Paneer Momos', diet: 'veg', price: '₹140' },
            { name: 'Veg Momos Platter', diet: 'veg', price: '₹150' }
          ]
        },
        {
          header: 'Chicken Momos',
          items: [
            { name: 'Chicken Momos', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Peri Peri Momos', diet: 'nonveg', price: '₹130' },
            { name: 'Chicken Cheese Momos', diet: 'nonveg', price: '₹140' },
            { name: 'Chicken Tikka Momos', diet: 'nonveg', price: '₹140' },
            {
              name: 'Chicken Momos Platter',
              diet: 'nonveg',
              price: '₹150',
              afterNote: 'Steam Charges — ₹30 extra'
            }
          ]
        },
        {
          header: 'Shawarma',
          items: [
            { name: 'Chicken Shawarma', diet: 'nonveg', price: '₹80' },
            { name: 'Only Chicken Shawarma', diet: 'nonveg', price: '₹80' },
            { name: 'Chicken Schezwan Shawarma', diet: 'nonveg', price: '₹90' },
            { name: 'Double Chicken Shawarma', diet: 'nonveg', price: '₹100' },
            { name: 'Chicken Tandoori Shawarma', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Peri Peri Shawarma', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Cheese Shawarma', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken BBQ Shawarma', diet: 'nonveg', price: '₹110' },
            { name: 'Chicken Open Shawarma', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Special Shawarma', diet: 'nonveg', price: '₹170' }
          ]
        },
        {
          header: 'Veg Wraps',
          items: [
            { name: 'Chilly Garlic Wrap', diet: 'veg', price: '₹120' },
            { name: 'Aloo Tikki Wrap', diet: 'veg', price: '₹130' },
            { name: 'Paneer Wrap', diet: 'veg', price: '₹140' },
            { name: 'Paneer Tikka Wrap', diet: 'veg', price: '₹160' },
            { name: 'Paneer Schezwan Wrap', diet: 'veg', price: '₹170' }
          ]
        },
        {
          header: 'Non Veg Wraps',
          items: [
            { name: 'Egg Wrap', diet: 'nonveg', price: '₹90' },
            { name: 'Egg Schezwan Wrap', diet: 'nonveg', price: '₹100' },
            { name: 'Chicken Wrap', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Schezwan Wrap', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Kheema Wrap', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Sheekh Kabab Wrap', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Tandoori Tikka Wrap', diet: 'nonveg', price: '₹160' },
            { name: 'Garlic Pepper Grilled Chicken Wrap', diet: 'nonveg', price: '₹180' },
            { name: 'Tandoori Grilled Chicken Wrap', diet: 'nonveg', price: '₹180' }
          ]
        },
        {
          header: 'Tandoori',
          items: [
            { name: 'Garlic Pepper Tandoori', diet: 'nonveg', price: '₹310 half / ₹585 full' },
            { name: 'Grilled Chicken Tandoori', diet: 'nonveg', price: '₹310 half / ₹585 full' }
          ]
        }
      ]
    },
    {
      id: 'sandwiches',
      label: 'Sandwiches',
      sections: [
        {
          header: 'Plain Sandwich',
          items: [
            { name: 'Bread Butter', diet: 'veg', price: '₹50' },
            { name: 'Bread Butter Cheese', diet: 'veg', price: '₹60' },
            { name: 'Bread Butter Jam', diet: 'veg', price: '₹60' },
            { name: 'Bread Cheese', diet: 'veg', price: '₹60' },
            { name: 'Club Sandwich', diet: 'veg', price: '₹120' }
          ]
        },
        {
          header: 'Veg Grill Sandwich',
          items: [
            { name: 'Veg Sandwich', diet: 'veg', price: '₹100' },
            { name: 'Veg Cheese Sandwich', diet: 'veg', price: '₹120' },
            { name: 'Veg Corn Sandwich', diet: 'veg', price: '₹100' },
            { name: 'Veg Corn Cheese Sandwich', diet: 'veg', price: '₹120' },
            { name: 'Veg Paneer Sandwich', diet: 'veg', price: '₹130' },
            { name: 'Veg Paneer Cheese Sandwich', diet: 'veg', price: '₹150' },
            { name: 'Veg Mexican Sandwich', diet: 'veg', price: '₹140' },
            { name: 'Veg Mexican Cheese Sandwich', diet: 'veg', price: '₹160' }
          ]
        },
        {
          header: 'Chicken Grill Sandwich',
          items: [
            { name: 'Regular Chicken Sandwich', diet: 'nonveg', price: '₹120' },
            { name: 'Chicken Cheese Sandwich', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Tandoori Sandwich', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken Cheese Tandoori Sandwich', diet: 'nonveg', price: '₹170' },
            { name: 'Chicken BBQ Sandwich', diet: 'nonveg', price: '₹150' },
            { name: 'Chicken BBQ Cheese Sandwich', diet: 'nonveg', price: '₹170' },
            { name: 'Chicken Mexican Sandwich', diet: 'nonveg', price: '₹180' },
            { name: 'Chicken Mexican Cheese Sandwich', diet: 'nonveg', price: '₹200' }
          ]
        },
        {
          header: 'Chocolate Sandwich',
          items: [
            { name: 'Chocolate Sandwich', diet: 'veg', price: '₹100' },
            { name: 'Exclusive Chocolate Sandwich', diet: 'veg', price: '₹120' }
          ]
        },
        {
          header: 'Mini Sandwich — Veg',
          items: [
            { name: 'Chilly Cheese Pizza', diet: 'veg', price: '₹130' },
            { name: 'Tom Cheese Pizza', diet: 'veg', price: '₹130' },
            { name: 'Tom Chilly Cheese Pizza', diet: 'veg', price: '₹150' },
            { name: 'Corn Chilly Cheese Pizza', diet: 'veg', price: '₹170' }
          ],
          note: 'Extra Cheese +₹40'
        },
        {
          header: 'Mini Sandwich — Non Veg',
          items: [
            { name: 'Chi Chilly Cheese Pizza', diet: 'nonveg', price: '₹150' },
            { name: 'Chi Tom Cheese Pizza', diet: 'nonveg', price: '₹150' },
            { name: 'Chi Tom Chilly Cheese Pizza', diet: 'nonveg', price: '₹170' }
          ]
        },
        {
          header: 'Pasta',
          items: [
            { name: 'White Cheese Pasta', diet: 'veg', price: '₹120' },
            { name: 'Red Sauce Pasta', diet: 'veg', price: '₹120' }
          ]
        },
        {
          header: 'Maggi',
          items: [
            { name: 'Plain Maggi', diet: 'veg', price: '₹50' },
            { name: 'Cheese Maggi', diet: 'veg', price: '₹60' }
          ]
        }
      ]
    },
    {
      id: 'drinks',
      label: 'Drinks and Desserts',
      sections: [
        {
          header: 'Beverages',
          items: [
            { name: 'Soft Drinks', price: '₹20' },
            { name: 'Hot Coffee', price: '₹40' },
            { name: 'Cold Coffee', price: '₹60' }
          ]
        },
        {
          header: 'Shakes',
          sectionNote: 'Milk shake / Thick shake',
          items: [
            { name: 'Vanilla', diet: 'veg', priceShake: true },
            { name: 'Mango', diet: 'veg', priceShake: true },
            { name: 'Strawberry', diet: 'veg', priceShake: true },
            { name: 'Chocolate', diet: 'veg', priceShake: true },
            { name: 'Rose', diet: 'veg', priceShake: true },
            { name: 'Butterscotch', diet: 'veg', priceShake: true }
          ]
        },
        {
          header: 'Mojito',
          items: [
            { name: 'Blue Curacao', diet: 'veg', price: '₹80' },
            { name: 'Lime and Mint', diet: 'veg', price: '₹80' },
            { name: 'Strawberry', diet: 'veg', price: '₹80' }
          ]
        },
        {
          header: 'Sizzlers and Desserts',
          items: [
            { name: 'Chocolate Shots', diet: 'veg', price: '₹80' },
            { name: 'Hot Chocolate', diet: 'veg', price: '₹100' },
            { name: 'Lava Cake', diet: 'veg', price: '₹100' },
            { name: 'Sizzling Chocolate Brownie', diet: 'veg', price: '₹130' },
            { name: 'Sizzling Vanilla Brownie', diet: 'veg', price: '₹130' },
            { name: 'Choco Van Brownie', diet: 'veg', price: '₹160' },
            { name: 'Choco Crunch Sizzler', diet: 'veg', price: '₹180' }
          ]
        }
      ]
    },
    {
      id: 'combos',
      label: 'Combo Meals',
      infoBox: true,
      combos: [
        {
          name: '1 Pizza + 2 Burger + 2 Cold Drink',
          veg: '₹380',
          nonveg: '₹420'
        },
        {
          name: '1 Pizza + Garlic Shots or Chicken Pops + Cold Drinks',
          veg: '₹200',
          nonveg: '₹250'
        },
        { name: 'Burger 5 Pcs', veg: '₹350', nonveg: '₹400' },
        { name: '2 Cheese Pizza', veg: '₹220', nonveg: '₹280' },
        { name: '4 Nuggets + 6 pcs Pops + 4 Pcs KFC Wing', nonveg: '₹300' },
        { name: '6 Garlic Shots + 4 Pcs Nuggets + Fries', veg: '₹200' },
        {
          name: '1 Pizza + 2 Burger + Nuggets 3 Pcs + Wings 2 Pcs + 2 Cold Drink',
          nonveg: '₹500'
        },
        {
          name: '1 Pizza + 2 Burger + Nuggets 3 Pcs + Momos 4 Pcs + 2 Cold Drinks',
          nonveg: '₹500'
        },
        {
          name: 'BBQ Wings + Tandoori Wings + KFC Wings + Hot and Spicy Wings + Hot and Spicy Tender',
          nonveg: '₹450'
        }
      ],
      footerNote: 'Prices may vary. Please confirm with us before ordering.'
    }
  ];

  var tabsEl = document.getElementById('menu-tabs');
  var panelsEl = document.getElementById('menu-panels');
  var bodyEl = document.getElementById('menu-body');
  var teaserGridEl = document.getElementById('menu-teaser-grid');
  var teaserNoteEl = document.getElementById('menu-teaser-note');
  var viewFullBtnEl = document.getElementById('menu-view-full-btn');
  var searchInput = document.getElementById('menu-search');
  var noResultsEl = document.getElementById('menu-no-results');
  var searchResultsEl = document.getElementById('menu-search-results');
  var searchAllBtn = document.getElementById('menu-search-all-btn');
  var clearSearchBtn = document.getElementById('menu-clear-search-btn');

  var isTeaserMode = !!teaserGridEl;

  var TEASER_ITEMS = [
    { tabId: 'burgers', name: 'Kaps Special Burger' },
    { tabId: 'burgers', name: 'Crispy Chicken Burger' },
    { tabId: 'pizza', name: 'Margherita Pizza' },
    { tabId: 'pizza', name: 'Paneer Tikka Pizza' },
    { tabId: 'momos', name: 'Veg Momos' },
    { tabId: 'momos', name: 'Chicken Momos' },
    { tabId: 'snacks', name: 'Peri Peri Fries' },
    { tabId: 'snacks', name: 'Tandoori Wings' },
    { tabId: 'sandwiches', name: 'Club Sandwich' },
    { tabId: 'drinks', name: 'Cold Coffee' },
    { tabId: 'drinks', name: 'Chocolate' },
    {
      tabId: 'combos',
      name: '1 Pizza + 2 Burger + Nuggets 3 Pcs + Momos 4 Pcs + 2 Cold Drinks'
    }
  ];

  var activeTabId = 'snacks';
  var searchAllMode = false;
  var isSwitching = false;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function dietMarkup(diet) {
    if (!diet) return '';
    var cls = diet === 'veg' ? 'menu-item__diet--veg' : 'menu-item__diet--nonveg';
    var label = diet === 'veg' ? 'Vegetarian' : 'Non Vegetarian';
    return '<span class="menu-item__diet ' + cls + '" aria-label="' + label + '"></span>';
  }

  function priceMarkup(item) {
    if (item.priceShake) {
      return (
        '<div class="menu-item__price menu-item__price--stacked">' +
        '<span class="menu-item__price-tier"><span class="menu-item__price-label">milk</span>₹80</span>' +
        '<span class="menu-item__price-tier"><span class="menu-item__price-label">thick</span>₹120</span>' +
        '</div>'
      );
    }
    return '<div class="menu-item__price">' + escapeHtml(item.price) + '</div>';
  }

  function comboPriceMarkup(combo) {
    var parts = [];
    if (combo.veg) {
      parts.push('<span class="menu-item__price-tier">Veg: ' + escapeHtml(combo.veg) + '</span>');
    }
    if (combo.nonveg) {
      parts.push('<span class="menu-item__price-tier">Non Veg: ' + escapeHtml(combo.nonveg) + '</span>');
    }
    return '<div class="menu-item__price menu-item__price--stacked">' + parts.join('') + '</div>';
  }

  function buildItemRow(item, tabId) {
    var searchText = [item.name, item.desc || '', item.price || ''].join(' ');
    if (item.priceShake) {
      searchText += ' milk thick shake ₹80 ₹120';
    }
    searchText = searchText.toLowerCase();
    var descHtml = item.desc
      ? '<p class="menu-item__desc">' + escapeHtml(item.desc) + '</p>'
      : '';

    return (
      '<div class="menu-item" data-search="' + escapeHtml(searchText) + '" data-tab="' + tabId + '">' +
      '<div class="menu-item__left">' +
      '<div class="menu-item__name-row">' +
      dietMarkup(item.diet) +
      '<span class="menu-item__name" data-name="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + '</span>' +
      '</div>' +
      descHtml +
      '</div>' +
      priceMarkup(item) +
      '</div>'
    );
  }

  function buildComboRow(combo, tabId) {
    var searchText = [combo.name, combo.veg || '', combo.nonveg || ''].join(' ').toLowerCase();
    return (
      '<div class="menu-item menu-combo" data-search="' + escapeHtml(searchText) + '" data-tab="' + tabId + '">' +
      '<div class="menu-item__left">' +
      '<div class="menu-item__name-row">' +
      '<span class="menu-item__name" data-name="' + escapeHtml(combo.name) + '">' + escapeHtml(combo.name) + '</span>' +
      '</div>' +
      '</div>' +
      comboPriceMarkup(combo) +
      '</div>'
    );
  }

  function renderPanel(tab) {
    var html = '<div class="menu__grid">';

    if (tab.infoBox) {
      html +=
        '<div class="menu-info-box">' +
        '<p class="menu-info-box__text">Great value for groups and parties. Contact us on WhatsApp to customize your combo or ask about availability.</p>' +
        '<a href="' + WHATSAPP_COMBO + '" class="menu__whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>' +
        '</div>';

      tab.combos.forEach(function (combo) {
        html += buildComboRow(combo, tab.id);
      });

      if (tab.footerNote) {
        html += '<p class="menu__combo-footer">' + escapeHtml(tab.footerNote) + '</p>';
      }
    } else {
      tab.sections.forEach(function (section) {
        html += '<h3 class="menu-section-header">' + escapeHtml(section.header) + '</h3>';

        if (section.sectionNote) {
          html += '<p class="menu-note menu-note--section">' + escapeHtml(section.sectionNote) + '</p>';
        }

        section.items.forEach(function (item) {
          html += buildItemRow(item, tab.id);
          if (item.afterNote) {
            html += '<p class="menu-note">' + escapeHtml(item.afterNote) + '</p>';
          }
        });

        if (section.note) {
          html += '<p class="menu-note">' + escapeHtml(section.note) + '</p>';
        }
      });
    }

    html += '</div>';
    return html;
  }

  function renderTabs() {
    tabsEl.innerHTML = MENU_TABS.map(function (tab, index) {
      var active = tab.id === activeTabId ? ' menu__tab--active' : '';
      return (
        '<button type="button" class="menu__tab' + active + '" role="tab" ' +
        'id="menu-tab-' + tab.id + '" data-tab="' + tab.id + '" ' +
        'aria-selected="' + (tab.id === activeTabId) + '" ' +
        'aria-controls="menu-panel-' + tab.id + '" tabindex="' + (tab.id === activeTabId ? '0' : '-1') + '">' +
        escapeHtml(tab.label) +
        '</button>'
      );
    }).join('');
  }

  function renderPanels() {
    panelsEl.innerHTML = MENU_TABS.map(function (tab) {
      var active = tab.id === activeTabId;
      return (
        '<div class="menu__panel' + (active ? ' menu__panel--active menu__panel--visible' : '') + '" ' +
        'id="menu-panel-' + tab.id + '" role="tabpanel" ' +
        'aria-labelledby="menu-tab-' + tab.id + '"' +
        (active ? '' : ' hidden') + '>' +
        renderPanel(tab) +
        '</div>'
      );
    }).join('');

    observeSectionHeaders();
  }

  function getTabById(id) {
    return MENU_TABS.find(function (t) { return t.id === id; });
  }

  function findMenuEntry(tabId, name) {
    var tab = getTabById(tabId);
    if (!tab) return null;

    if (tab.combos) {
      var combo = tab.combos.find(function (c) { return c.name === name; });
      return combo ? { type: 'combo', data: combo, tabId: tabId } : null;
    }

    if (!tab.sections) return null;

    for (var i = 0; i < tab.sections.length; i++) {
      var section = tab.sections[i];
      for (var j = 0; j < section.items.length; j++) {
        if (section.items[j].name === name) {
          return { type: 'item', data: section.items[j], tabId: tabId };
        }
      }
    }

    return null;
  }

  function countMenuEntries() {
    var total = 0;

    MENU_TABS.forEach(function (tab) {
      if (tab.combos) {
        total += tab.combos.length;
        return;
      }

      if (!tab.sections) return;

      tab.sections.forEach(function (section) {
        total += section.items.length;
      });
    });

    return total;
  }

  function renderTeaser() {
    var html = '<div class="menu__grid menu__grid--teaser">';

    TEASER_ITEMS.forEach(function (ref) {
      var found = findMenuEntry(ref.tabId, ref.name);
      if (!found) return;

      if (found.type === 'combo') {
        html += buildComboRow(found.data, found.tabId);
      } else {
        html += buildItemRow(found.data, found.tabId);
      }
    });

    html += '</div>';
    teaserGridEl.innerHTML = html;

    var total = countMenuEntries();
    if (teaserNoteEl) {
      teaserNoteEl.textContent = total + ' dishes, combos, and drinks on the full menu';
    }

    if (viewFullBtnEl) {
      viewFullBtnEl.textContent = 'View full menu (' + total + ' items)';
    }
  }

  function initTeaser() {
    renderTeaser();
    observeMenuBody();
  }

  function switchTab(tabId, skipAnimation) {
    if (isSwitching) return;
    if (tabId === activeTabId && !searchAllMode && !skipAnimation) return;

    var nextPanel = document.getElementById('menu-panel-' + tabId);
    if (!nextPanel) return;

    var currentPanel = document.getElementById('menu-panel-' + activeTabId);
    searchAllMode = false;
    searchResultsEl.hidden = true;
    panelsEl.hidden = false;

    function updateTabButtons() {
      document.querySelectorAll('.menu__tab').forEach(function (btn) {
        var isActive = btn.getAttribute('data-tab') === tabId;
        btn.classList.toggle('menu__tab--active', isActive);
        btn.setAttribute('aria-selected', isActive);
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
      });
    }

    function showPanel(panel) {
      panel.hidden = false;
      panel.classList.add('menu__panel--active', 'menu__panel--visible');
      panel.classList.remove('menu__panel--leaving', 'menu__panel--entering');
    }

    function hidePanel(panel) {
      panel.classList.remove('menu__panel--active', 'menu__panel--visible', 'menu__panel--entering');
      panel.classList.remove('menu__panel--leaving');
      panel.hidden = true;
    }

    function finishSwitch() {
      activeTabId = tabId;
      updateTabButtons();
      document.querySelectorAll('.menu__panel').forEach(function (panel) {
        if (panel.id === 'menu-panel-' + tabId) {
          showPanel(panel);
        } else {
          hidePanel(panel);
        }
      });
      applySearch();
      observeSectionHeaders();
    }

    if (skipAnimation || !currentPanel || currentPanel === nextPanel) {
      finishSwitch();
      return;
    }

    isSwitching = true;
    currentPanel.classList.remove('menu__panel--visible');
    currentPanel.classList.add('menu__panel--leaving');

    setTimeout(function () {
      hidePanel(currentPanel);

      nextPanel.hidden = false;
      nextPanel.classList.add('menu__panel--active', 'menu__panel--entering');
      nextPanel.classList.remove('menu__panel--visible');
      activeTabId = tabId;
      updateTabButtons();

      setTimeout(function () {
        nextPanel.classList.remove('menu__panel--entering');
        nextPanel.classList.add('menu__panel--visible');
        isSwitching = false;
        applySearch();
        observeSectionHeaders();
      }, 100);
    }, 200);
  }

  function highlightName(nameEl, query) {
    var original = nameEl.getAttribute('data-name');
    if (!query) {
      nameEl.textContent = original;
      return;
    }

    var lower = original.toLowerCase();
    var q = query.toLowerCase();
    var idx = lower.indexOf(q);

    if (idx === -1) {
      nameEl.textContent = original;
      return;
    }

    nameEl.innerHTML =
      escapeHtml(original.slice(0, idx)) +
      '<mark>' + escapeHtml(original.slice(idx, idx + q.length)) + '</mark>' +
      escapeHtml(original.slice(idx + q.length));
  }

  function itemMatches(itemEl, query) {
    var searchData = itemEl.getAttribute('data-search') || '';
    return searchData.indexOf(query.toLowerCase()) !== -1;
  }

  function syncMenuNoteVisibility(panel, query) {
    panel.querySelectorAll('.menu-note').forEach(function (note) {
      if (!query) {
        note.style.display = '';
        return;
      }

      var prev = note.previousElementSibling;
      while (prev) {
        if (prev.classList.contains('menu-item')) {
          note.style.display = prev.classList.contains('menu-item--faded') ? 'none' : '';
          return;
        }
        if (prev.classList.contains('menu-section-header')) {
          note.style.display = prev.style.display === 'none' ? 'none' : '';
          return;
        }
        prev = prev.previousElementSibling;
      }

      note.style.display = 'none';
    });
  }

  function applySearch() {
    var query = (searchInput.value || '').trim();

    if (searchAllMode && query) {
      renderSearchAll(query);
      return;
    }

    searchResultsEl.hidden = true;
    panelsEl.hidden = false;

    var panel = document.getElementById('menu-panel-' + activeTabId);
    if (!panel) return;

    var grid = panel.querySelector('.menu__grid');
    if (grid) {
      grid.classList.toggle('menu__grid--searching', !!query);
    }

    var items = panel.querySelectorAll('.menu-item');
    var visibleCount = 0;

    if (!query) {
      noResultsEl.hidden = true;
      items.forEach(function (item) {
        item.classList.remove('menu-item--faded');
        var nameEl = item.querySelector('.menu-item__name');
        if (nameEl) highlightName(nameEl, '');
      });
      panel.querySelectorAll('.menu-section-header, .menu-note, .menu-info-box, .menu__combo-footer').forEach(function (el) {
        el.style.display = '';
      });
      if (grid) {
        grid.classList.remove('menu__grid--searching');
      }
      return;
    }

    items.forEach(function (item) {
      var match = itemMatches(item, query);
      item.classList.toggle('menu-item--faded', !match);
      var nameEl = item.querySelector('.menu-item__name');
      if (nameEl) highlightName(nameEl, match ? query : '');
      if (match) visibleCount++;
    });

    panel.querySelectorAll('.menu-section-header').forEach(function (header) {
      var next = header.nextElementSibling;
      var sectionHasMatch = false;

      while (next && !next.classList.contains('menu-section-header')) {
        if (next.classList.contains('menu-item') && !next.classList.contains('menu-item--faded')) {
          sectionHasMatch = true;
          break;
        }
        next = next.nextElementSibling;
      }

      header.style.display = sectionHasMatch ? '' : 'none';
    });

    syncMenuNoteVisibility(panel, query);

    panel.querySelectorAll('.menu-info-box, .menu__combo-footer').forEach(function (el) {
      el.style.display = visibleCount > 0 ? '' : 'none';
    });

    noResultsEl.hidden = visibleCount > 0;
  }

  function renderSearchAll(query) {
    panelsEl.hidden = true;
    noResultsEl.hidden = true;

    var html = '';
    var totalMatches = 0;

    MENU_TABS.forEach(function (tab) {
      var matches = [];

      if (tab.combos) {
        tab.combos.forEach(function (combo) {
          var searchText = [combo.name, combo.veg || '', combo.nonveg || ''].join(' ').toLowerCase();
          if (searchText.indexOf(query.toLowerCase()) !== -1) {
            matches.push({ type: 'combo', data: combo });
          }
        });
      } else if (tab.sections) {
        tab.sections.forEach(function (section) {
          section.items.forEach(function (item) {
            var searchText = [item.name, item.desc || '', item.price || ''].join(' ').toLowerCase();
            if (searchText.indexOf(query.toLowerCase()) !== -1) {
              matches.push({ type: 'item', data: item });
            }
          });
        });
      }

      if (!matches.length) return;

      totalMatches += matches.length;
      html += '<div class="menu__search-results-tab">';
      html += '<p class="menu__search-results-label">' + escapeHtml(tab.label) + '</p>';
      html += '<div class="menu__grid">';

      matches.forEach(function (m) {
        if (m.type === 'combo') {
          html += buildComboRow(m.data, tab.id);
        } else {
          html += buildItemRow(m.data, tab.id);
        }
      });

      html += '</div></div>';
    });

    if (!totalMatches) {
      searchResultsEl.hidden = true;
      panelsEl.hidden = false;
      noResultsEl.hidden = false;
      searchAllMode = false;
      return;
    }

    searchResultsEl.innerHTML = html;
    searchResultsEl.hidden = false;

    searchResultsEl.querySelectorAll('.menu-item').forEach(function (item) {
      var nameEl = item.querySelector('.menu-item__name');
      if (nameEl && itemMatches(item, query)) {
        highlightName(nameEl, query);
      }
    });
  }

  function observeSectionHeaders() {
    var headers = document.querySelectorAll('.menu-section-header:not(.menu-section-header--visible)');
    if (!headers.length) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      headers.forEach(function (h) { h.classList.add('menu-section-header--visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('menu-section-header--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -20px 0px' }
    );

    headers.forEach(function (header) {
      observer.observe(header);
    });
  }

  function observeMenuBody() {
    if (!bodyEl) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      bodyEl.classList.add('menu__body--visible');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            bodyEl.classList.add('menu__body--visible');
            observer.unobserve(bodyEl);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(bodyEl);
  }

  function bindEvents() {
    if (!tabsEl) return;

    tabsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.menu__tab');
      if (!btn) return;
      switchTab(btn.getAttribute('data-tab'));
    });

    searchInput.addEventListener('input', function () {
      if (!searchInput.value.trim()) {
        searchAllMode = false;
        searchResultsEl.hidden = true;
        panelsEl.hidden = false;
        document.querySelectorAll('.menu__grid--searching').forEach(function (grid) {
          grid.classList.remove('menu__grid--searching');
        });
      }
      applySearch();
    });

    searchAllBtn.addEventListener('click', function () {
      var query = (searchInput.value || '').trim();
      if (!query) return;
      searchAllMode = true;
      renderSearchAll(query);
    });

    clearSearchBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchAllMode = false;
      searchResultsEl.hidden = true;
      panelsEl.hidden = false;
      document.querySelectorAll('.menu__grid--searching').forEach(function (grid) {
        grid.classList.remove('menu__grid--searching');
      });
      noResultsEl.hidden = true;
      applySearch();
      searchInput.focus();
    });
  }

  function init() {
    if (isTeaserMode) {
      initTeaser();
      return;
    }

    if (!tabsEl || !panelsEl) return;

    var params = new URLSearchParams(window.location.search);
    var tabParam = params.get('tab');
    if (tabParam && getTabById(tabParam)) {
      activeTabId = tabParam;
    }

    renderTabs();
    renderPanels();
    observeMenuBody();
    bindEvents();

    if (tabParam && getTabById(tabParam)) {
      switchTab(tabParam, true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.KapsMenu = { switchTab: switchTab };
})();
