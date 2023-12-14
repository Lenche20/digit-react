const menu = [
    {
        id: 1,
        title: 'Hamburger',
        category: 'burgers',
        price: 3.00,
        img:
            'https://imgur.com/tnrs1cI.jpg',
        desc: `Ingredients: patty, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 2,
        title: 'Cheeseburger',
        category: 'burgers',
        price: 3.20,
        img:
            'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
        desc: `Ingredients: patty, cheese, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 3,
        title: 'Baconburger',
        category: 'burgers',
        price: 3.50,
        img: 'https://imgs.search.brave.com/HgS0j_AFe3k8JQtPVdFN11Y6Q4EkCkQg1IfG7bTkWss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc0LzM2Lzcw/LzM2MF9GXzE3NDM2/NzA0NV82aHloN2M4/TWtqdTVRbjFPN21M/UXFtdGZDaFFNZHha/YS5qcGc',
        desc: `Ingredients: patty, bacon, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 4,
        title: 'Burgeria',
        category: 'burgers',
        price: 4.00,
        img:
            'https://imgs.search.brave.com/WmM-zASfeParx5V82mGxCb4rAVCmQHuJotuzzVMsJmQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGluZ3RhYmxl/LmNvbS9pbWcvZ2Fs/bGVyeS90aGUtY2xl/dmVyLWhhY2stdG8t/Z2V0LWN1cmx5LWZy/aWVzLXdpdGhvdXQt/YS1zcGlyYWxpemVy/L2ludHJvLTE2NDk2/OTEyOTkuanBn',
        desc: `Ingredients: 2 patty's, cheese, bacon, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 5,
        title: 'Chicken Burger',
        category: 'burgers',
        price: 3.00,
        img:
            'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
        desc: `Ingredients: steak, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 6,
        title: 'Crispy Chicken',
        category: 'burgers',
        price: 3.20,
        img:
            'https://imgs.search.brave.com/syZbg9wXF1Ot4fAB9OiDZQ0Hp2TSAUvs48w68PuJEcM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MDk2NTYwMi9waG90/by9waXp6YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NDhQ/N29ZZUVLSXhNS3BC/SC1USDlhOUJqajFT/WUxreUNYMWFudFVV/ZDlPdz0',
        desc: `Ingredients: crispy steak, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 7,
        title: 'Cheese Chicken',
        category: 'burgers',
        price: 3.50,
        img:
            'https://imgs.search.brave.com/7Nerd7j5ynNe3LMqkBBfUIL36A-Z_KyFmH5hyXhTLWs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzEyMDcyL3Bob3Rv/L2Jhc2tldC1vZi1m/cmVuY2gtZnJpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTdST2ZsWGJEUGpX/UWJVVE1BVGE5MGFs/SVdEaXI2RWFGQnFy/bU1FdVkyeVU9',
        desc: `Ingredients: steak, cheese, pickles, lettuce, tomato, onion, sauces`,
    },
    {
        id: 8,
        title: 'Ham Toast',
        category: 'toasts',
        price: 3.00,
        img:
            'https://ocdn.eu/pulscms-transforms/1/U_fk9kpTURBXy81NGM2MzIxNGE2NTVmYmI2YmU4Njg0MTJkM2QyODQzNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
        desc: `Ingredients: ham, cheese, sauces`,
    },
    {
        id: 9,
        title: 'Pepperoni Toast',
        category: 'toasts',
        price: 3.20,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: `Ingredients: pepperoni, cheese, sauces`,
    },
    {
        id: 10,
        title: 'Milk Cheese Toast',
        category: 'toasts',
        price: 3.50,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: `Ingredients: ham OR pepperoni, milk cheese, sauces`,
    },
    {
        id: 11,
        title: 'Small Fries',
        category: 'sides',
        price: 1.50,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 12,
        title: 'Medium Fries',
        category: 'sides',
        price: 2.00,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 13,
        title: 'Large Fries',
        category: 'sides',
        price: 2.50,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 14,
        title: 'Tomato sauce',
        category: 'sides',
        price: 0.50,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 15,
        title: 'Curry sauce',
        category: 'sides',
        price: 0.80,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 16,
        title: 'Burger sauce',
        category: 'sides',
        price: 0.80,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 17,
        title: 'Hot sauce',
        category: 'sides',
        price: 0.50,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: ``,
    },
    {
        id: 18,
        title: 'Coca Cola',
        category: 'drinks',
        price: 1.30,
        img: 'https://imgur.com/RzFH4Gg.jpg',
        desc: ``,
    },
    {
        id: 19,
        title: 'Coca Cola Zero',
        category: 'drinks',
        price: 1.30,
        img: 'https://imgur.com/46Sec2L.jpg',
        desc: ``,
    },
    {
        id: 20,
        title: 'Fanta',
        category: 'drinks',
        price: 1.30,
        img: 'https://imgur.com/A7fC8Ba.jpg',
        desc: ``,
    },
    {
        id: 21,
        title: 'Schweppes',
        category: 'drinks',
        price: 1.30,
        img: 'https://imgur.com/u9U9tM6.jpg',
        desc: ``,
    },
    {
        id: 22,
        title: 'Water',
        category: 'drinks',
        price: 1.00,
        img: 'https://imgur.com/5iSEkxB.jpg',
        desc: ``,
    },
    {
        id: 23,
        title: 'Sparkling Water',
        category: 'drinks',
        price: 1.00,
        img: 'https://imgur.com/rRNGt6l.jpg',
        desc: ``,
    },

]
export default menu