/* Gallery SVG icons */
const GICON = {
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>`,
    image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M3 17l5-5 4 4 3-3 6 5"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>`,
    folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17 18z"/><path d="M12 11v6M9.5 13.5L12 11l2.5 2.5"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,
    list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>`,
    cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>`,
    bars: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>`,
    chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`,
    film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>`
};


/* ==========================================
   CELLARTGEN ADMIN PANEL
   Complete Admin JavaScript
   ========================================== */

let adminAuthenticated = false;
let cmsType = 'expertise';
let cmsItems = [];
let cmsEditingItem = null;
let cmsImageData = '';

const getEl = id => document.getElementById(id);

const authGate = getEl('authGate');
const loginForm = getEl('loginForm');
const cmsList = getEl('cmsList');
const cmsNotice = getEl('cmsNotice');
const cmsModal = getEl('cmsModal');
const cmsEditorForm = getEl('cmsEditorForm');

const cmsNames = {
    expertise: 'Our Expertise',
    pages: 'Website Pages',
    blogs: 'Blogs',
    media: 'Media Library',
    settings: 'Site Settings',
    enquiries: 'Contact Enquiries',
    careerApplications: 'Career Applications'
};

/* ---------- API REQUEST ---------- */

async function apiRequest(url, options = {}) {
    const response = await fetch(url, {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        ...options
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(data.error || 'Request failed');
    }

    return data;
}

const authRequest = apiRequest;
const cmsRequest = apiRequest;

/* ---------- NOTIFICATIONS ---------- */

function cmsMessage(message) {
    if (cmsNotice) cmsNotice.textContent = message;
}

/* ---------- LOGIN / LOGOUT ---------- */

function showLogin(message = '') {
    if (authGate) authGate.style.display = 'grid';

    const error = getEl('loginError');
    if (error) error.textContent = message;
}

function unlockAdmin() {
    if (adminAuthenticated) return;

    adminAuthenticated = true;

    if (authGate) authGate.style.display = 'none';

    cmsLoad();
    refreshDashboardStats();
}

if (loginForm) {
    loginForm.addEventListener('submit', async event => {
        event.preventDefault();

        const button = getEl('loginSubmit');

        if (button) {
            button.disabled = true;
            button.textContent = 'Signing in…';
        }

        try {
            await authRequest('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    user: getEl('adminUser')?.value || '',
                    pass: getEl('adminPass')?.value || ''
                })
            });

            if (getEl('adminPass')) {
                getEl('adminPass').value = '';
            }

            unlockAdmin();

        } catch (error) {
            showLogin(error.message);

        } finally {
            if (button) {
                button.disabled = false;
                button.textContent = 'Sign In';
            }
        }
    });
}

getEl('logoutBtn')?.addEventListener('click', async () => {
    try {
        await authRequest('/api/auth/logout', {
            method: 'POST'
        });
    } catch (error) {
        // Continue to show login screen.
    }

    adminAuthenticated = false;
    showLogin('You have been signed out.');
});

authRequest('/api/auth/session')
    .then(unlockAdmin)
    .catch(() => showLogin());

/* ---------- DASHBOARD DATE ---------- */

const dateEl = getEl('today');

if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

/* ---------- THEME ---------- */

getEl('themeBtn')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

/* ---------- DASHBOARD CHART ---------- */

const chartCanvas = getEl('activityChart');

if (chartCanvas && window.Chart) {
    new Chart(chartCanvas, {
        type: 'line',

        data: {
            labels: [
                'Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec'
            ],

            datasets: [
                {
                    label: 'Published',
                    data: [2, 2, 1, 1, 3, 3, 5, 6, 4, 3, 2, 3],
                    borderColor: '#9564c9',
                    backgroundColor: 'transparent',
                    tension: 0.35,
                    pointRadius: 0,
                    borderWidth: 1.5
                },
                {
                    label: 'Draft',
                    data: [4, 4, 2, 2, 1, 1, 1, 3, 4, 4, 3, 3],
                    borderColor: '#c4a078',
                    backgroundColor: 'transparent',
                    tension: 0.35,
                    pointRadius: 0,
                    borderWidth: 1.5
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: { display: false }
            },

            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#81796e', font: { size: 9 } }
                },

                y: {
                    min: 0,
                    max: 8,
                    ticks: {
                        stepSize: 2,
                        color: '#81796e',
                        font: { size: 9 }
                    },
                    grid: { color: '#29231d' }
                }
            }
        }
    });
}

/* ---------- CALENDAR ---------- */

let month = new Date();

function drawCalendar() {
    const calendar = getEl('calendar');
    if (!calendar) return;

    calendar.innerHTML = '';

    const label = getEl('monthLabel');

    if (label) {
        label.textContent = month.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    }

    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(day => {
        const span = document.createElement('span');
        span.className = 'day';
        span.textContent = day;
        calendar.appendChild(span);
    });

    const firstDay = new Date(
        month.getFullYear(),
        month.getMonth(),
        1
    ).getDay();

    const totalDays = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0
    ).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(document.createElement('span'));
    }

    for (let day = 1; day <= totalDays; day++) {
        const span = document.createElement('span');
        span.textContent = day;

        const today = new Date();

        if (
            day === today.getDate() &&
            month.getMonth() === today.getMonth() &&
            month.getFullYear() === today.getFullYear()
        ) {
            span.className = 'today';
        }

        calendar.appendChild(span);
    }
}

getEl('prevMonth')?.addEventListener('click', () => {
    month.setMonth(month.getMonth() - 1);
    drawCalendar();
});

getEl('nextMonth')?.addEventListener('click', () => {
    month.setMonth(month.getMonth() + 1);
    drawCalendar();
});

drawCalendar();

/* ---------- DASHBOARD TASKS ---------- */

function addTask() {
    const title = prompt('Enter new task:');

    if (!title || !title.trim()) return;

    const taskList = getEl('taskList');
    if (!taskList) return;

    const item = document.createElement('div');

    item.className = 'task';

    const heading = document.createElement('b');
    heading.textContent = title.trim();

    const description = document.createElement('small');
    description.textContent = 'New admin task';

    const footer = document.createElement('footer');
    footer.innerHTML = '<span>Today</span><span class="todo">To Do</span>';

    item.append(heading, description, footer);
    taskList.prepend(item);
}

getEl('addTask')?.addEventListener('click', addTask);
getEl('addTask2')?.addEventListener('click', addTask);


/* ---------- DASHBOARD SEARCH ---------- */

const dashboardSearch = getEl('search');

if (dashboardSearch) {
    let searchMessage = getEl('dashboardSearchMessage');

    if (!searchMessage) {
        searchMessage = document.createElement('small');
        searchMessage.id = 'dashboardSearchMessage';
        searchMessage.style.cssText =
            'display:block;margin:8px 0;color:#64748b;';
        dashboardSearch.insertAdjacentElement('afterend', searchMessage);
    }

    dashboardSearch.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();

        const dashboardItems = document.querySelectorAll(
            '#dashboardView .stats-grid > *, ' +
            '#dashboardView .dash-grid > *, ' +
            '#dashboardView .quick-grid > *'
        );

        const cmsItems = document.querySelectorAll('#cmsList > *');

        let matched = 0;
        let total = 0;

        [...dashboardItems, ...cmsItems].forEach(item => {
            const isMatch =
                !query || item.innerText.toLowerCase().includes(query);

            item.hidden = !isMatch;
            total++;

            if (isMatch) matched++;
        });

        searchMessage.textContent = !query
            ? ''
            : matched + ' matching items found.';
    });

    dashboardSearch.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            this.value = '';
            this.dispatchEvent(new Event('input'));
        }
    });
}


/* ==========================================
   MONGODB CMS MANAGER
   ========================================== */

/* ---------- HTML ESCAPE ---------- */

function cmsEscape(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

/* ---------- DASHBOARD COUNTS ---------- */

async function refreshDashboardStats() {
    if (!adminAuthenticated) return;

    try {
        const types = [
            'expertise',
            'blogs',
            'media',
            'enquiries',
            'careerApplications',
            'pages'
        ];

        const results = await Promise.all(
            types.map(type => cmsRequest('/api/cms/' + type))
        );

        if (getEl('expertiseCount')) {
            getEl('expertiseCount').textContent = results[0].length;
        }

        if (getEl('mediaCount')) {
            getEl('mediaCount').textContent = results[2].length;
        }

        if (getEl('enquiryCount')) {
            getEl('enquiryCount').textContent = results[3].length;
        }
        if (getEl('careerCount')) {
            getEl('careerCount').textContent = results[4].length;
        }

        if (getEl('pageCount')) {
            getEl('pageCount').textContent = results[5].length;
        }

    } catch (error) {
        console.error('Dashboard stats:', error);
    }
}

/* ---------- LOAD CMS CONTENT ---------- */

async function cmsLoad() {
    if (!adminAuthenticated || !cmsList) return;

    if (getEl('cmsTitle')) {
        getEl('cmsTitle').textContent =
            cmsNames[cmsType] + ' Manager';
    }

    cmsList.innerHTML = '<p class="muted">Loading…</p>';

    try {
        cmsItems = await cmsRequest('/api/cms/' + cmsType);
        if (window.cmsPageFilter && cmsType === 'pages') cmsItems = cmsItems.filter(item => item.pageKey === window.cmsPageFilter);

        cmsRender();

    } catch (error) {
        cmsList.innerHTML =
            '<p class="cms-empty">' +
            cmsEscape(error.message) +
            '</p>';
    }
}

/* ---------- DISPLAY CONTENT ---------- */

function cmsRender() {
    cmsList.classList.toggle('media-library-active', cmsType === 'media');
    document.getElementById('contentView')?.classList.toggle('is-media', cmsType === 'media');
    if (!cmsList) return;
    if (!cmsItems.length) {
        cmsList.innerHTML = '<div class="cms-empty">No ' + cmsEscape(cmsNames[cmsType]) + ' received yet.</div>';
        return;
    }
    if (cmsType === 'enquiries' || cmsType === 'careerApplications') {
        const isCareer = cmsType === 'careerApplications';
        cmsList.innerHTML = cmsItems.map(item => `
          <article class="cms-row submission-row">
            <div class="submission-main">
              <h4>${cmsEscape(item.name || 'Unnamed')}</h4>
              <p><b>${cmsEscape(item.email || '')}</b> &nbsp; ${cmsEscape(item.phone || '')}</p>
              ${isCareer ? `<p>Position: ${cmsEscape(item.position || 'Not specified')} · CV: ${cmsEscape(item.resume?.originalName || 'Not attached')}</p><p>${cmsEscape(item.coverNote || '')}</p>` : `<p>Company: ${cmsEscape(item.company || '—')} · Type: ${cmsEscape(item.enquiryType || 'General Enquiry')}</p><p>${cmsEscape(item.message || '')}</p>`}
              <small>Received: ${item.createdAt ? new Date(item.createdAt).toLocaleString() : '—'}</small>
            </div>
            <div class="cms-actions submission-actions">
              ${isCareer && item.resume?.storedName ? `<a class="cms-action" href="/api/admin/career-applications/${cmsEscape(item._id)}/resume" target="_blank" rel="noopener">Download CV</a>` : ''}
              <label class="submission-status">Status<select data-status="${cmsEscape(item._id)}"><option value="new" ${item.status === 'new' ? 'selected' : ''}>New</option><option value="reviewed" ${item.status === 'reviewed' ? 'selected' : ''}>Reviewed</option><option value="shortlisted" ${item.status === 'shortlisted' ? 'selected' : ''}>Shortlisted</option><option value="selected" ${item.status === 'selected' ? 'selected' : ''}>Selected</option><option value="rejected" ${item.status === 'rejected' ? 'selected' : ''}>Rejected</option><option value="replied" ${item.status === 'replied' ? 'selected' : ''}>Replied</option></select></label>
              <button class="cms-action" data-delete="${cmsEscape(item._id)}">Delete</button>
            </div>
          </article>`).join('');
        return;
    }

    // ---------- CELLARTGEN PREMIUM MEDIA GALLERY ----------
    if (cmsType === 'media') {
        const images = cmsItems.filter(item => !(item.mimeType || '').startsWith('video/')).length;
        const videos = cmsItems.length - images;
        const totalBytes = cmsItems.reduce((sum, item) => sum + Number(item.size || 0), 0);
        const formatSize = bytes => bytes >= 1024 * 1024 * 1024 ? (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB' : (bytes / 1024 / 1024).toFixed(1) + ' MB';
        cmsList.innerHTML = `
          <div class="media-library premium-gallery">
            <section class="gallery-hero">
              <div class="gallery-hero-copy"><span class="gallery-kicker">MEDIA GALLERY</span><h2>Cellartgen Media Library</h2><p>Manage your images and videos with ease</p>
                <div class="gallery-metrics"><span>${GICON.image}<b>${images}</b><small>Images</small></span><span>${GICON.play}<b>${videos}</b><small>Videos</small></span><span>${GICON.folder}<b>${new Set(cmsItems.map(x => x.category).filter(Boolean)).size}</b><small>Categories</small></span><span>${GICON.cloud}<b>${formatSize(totalBytes)}</b><small>Total Size</small></span></div>
              </div><div class="gallery-hero-art"><img src="img/admin-hero.jpg" alt="Pharmaceutical research laboratory"></div><div class="gallery-hero-slogan">Innovation<br>for a Healthier<br>Tomorrow.</div>
            </section>
            <div class="gallery-toolbar">
              <div class="gallery-tabs"><button class="gallery-filter active" data-media-filter="all">${GICON.grid} All Media <small>(${cmsItems.length})</small></button><button class="gallery-filter" data-media-filter="image">${GICON.image} Images <small>(${images})</small></button><button class="gallery-filter" data-media-filter="video">${GICON.film} Videos <small>(${videos})</small></button><button class="gallery-filter" data-media-filter="recent">${GICON.clock} Recent Uploads</button></div>
              <div class="gallery-tools"><select id="mediaCategoryFilter"><option value="all">All Categories</option>${[...new Set(cmsItems.map(x => x.category).filter(Boolean))].map(x => `<option value="${cmsEscape(x)}">${cmsEscape(x)}</option>`).join('')}</select><select id="mediaStatusFilter"><option value="all">All Status</option><option value="published">Published</option><option value="draft">Draft</option></select><select id="mediaSort"><option value="newest">Sort By: Newest</option><option value="oldest">Oldest</option><option value="name">Name A–Z</option><option value="largest">Largest File</option></select><button class="gallery-view-toggle active" data-gallery-view="grid" title="Grid view">${GICON.grid}</button><button class="gallery-view-toggle" data-gallery-view="list" title="List view">${GICON.list}</button></div>
            </div>
            <div class="gallery-actionbar"><input type="search" id="mediaSearch" placeholder="Search in gallery..." class="media-search"><button class="gallery-upload" id="galleryUploadBtn">${GICON.cloud} Upload Media</button><button class="gallery-folder" id="galleryCreateFolder">${GICON.folder} Create Folder</button><button class="gallery-bulk" id="galleryBulk">Bulk Actions⌄</button></div>
            <div class="gallery-workspace"><div class="media-grid" id="mediaGrid">
              ${cmsItems.map(item => {
            const url = item.url || item.image || ''; const isVideo = (item.mimeType || '').startsWith('video/'); const title = item.title || item.name || 'Untitled'; const size = Number(item.size || 0); const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''; const searchText = (title + ' ' + url + ' ' + (item.category || '')).toLowerCase(); return `<article class="media-card" data-search="${cmsEscape(searchText)}" data-kind="${isVideo ? 'video' : 'image'}" data-category="${cmsEscape(item.category || '')}" data-status="${cmsEscape(item.status || 'published')}" data-date="${item.createdAt ? new Date(item.createdAt).getTime() : 0}" data-size="${size}" data-name="${cmsEscape(title.toLowerCase())}">
                <div class="media-preview">${isVideo ? `<video src="${cmsEscape(url)}" preload="metadata"></video><span class="media-play">▶</span><span class="media-kind video-kind">${GICON.film} Video</span>` : `<img src="${cmsEscape(url)}" alt="${cmsEscape(title)}" loading="lazy"><span class="media-kind image-kind">${GICON.image} Image</span>`}<button class="media-expand" data-preview="${cmsEscape(item._id)}" title="Preview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button></div>
                <div class="media-info"><h4>${cmsEscape(title)}</h4><small>${GICON.cal} ${cmsEscape(date)} · ${size ? formatSize(size) : 'Media file'}</small></div>
                <div class="media-actions"><button class="cms-action" data-preview="${cmsEscape(item._id)}" title="Preview">${GICON.eye}</button><button class="cms-action" data-copy="${cmsEscape(item._id)}" title="Copy URL">${GICON.download}</button><button class="cms-action" data-edit="${cmsEscape(item._id)}" title="Edit">${GICON.edit}</button><button class="cms-action danger" data-delete="${cmsEscape(item._id)}" title="Delete">${GICON.trash}</button><button class="cms-action reuse-action" data-reuse="${cmsEscape(item._id)}">✓ Use Image</button></div>
              </article>`;
        }).join('')}
            </div><aside class="gallery-insights"><section class="insight-card"><h3>${GICON.bars} Gallery Insights</h3><div class="insight-line"><span class="ins-ico blue">${GICON.folder}</span><div><small>Total Media</small><b>${cmsItems.length}</b></div></div><div class="insight-line"><span class="ins-ico green">${GICON.image}</span><div><small>Images</small><b>${images}</b></div></div><div class="insight-line"><span class="ins-ico pink">${GICON.film}</span><div><small>Videos</small><b>${videos}</b></div></div><div class="storage-meter"><div class="storage-ring" style="--used:${Math.max(2, Math.min(100, Math.round(totalBytes / (1024 * 1024 * 1024) * 100)))}%"><b>${totalBytes ? Math.min(100, Math.round(totalBytes / (1024 * 1024 * 1024) * 100)) + '%' : '0%'}</b></div><span>Storage Used<br><small>${formatSize(totalBytes)} total</small></span></div></section><section class="insight-card quick-actions"><h3>${GICON.bolt} Quick Actions</h3><button id="quickAddImage"><i class="qa blue">${GICON.image}</i> Add New Image <b>${GICON.chev}</b></button><button id="quickAddVideo"><i class="qa blue2">${GICON.film}</i> Add New Video <b>${GICON.chev}</b></button><button id="quickCreateFolder"><i class="qa green">${GICON.folder}</i> Create Folder <b>${GICON.chev}</b></button><button id="quickManageCategories"><i class="qa orange">${GICON.grid}</i> Manage Categories <b>${GICON.chev}</b></button></section></aside></div>
            <div class="gallery-pagination"><span>Showing <b>${cmsItems.length ? 1 : 0} to ${cmsItems.length}</b> of ${cmsItems.length} media files</span><div><button disabled aria-label="Previous">‹</button><button class="current">1</button><button disabled aria-label="Next">›</button></div><label class="goto">Go to: <input type="number" min="1" value="1"><button type="button">Go</button></label></div>
            <div class="gallery-preview-modal" id="galleryPreviewModal" aria-hidden="true"><div class="gallery-preview-card"><button class="gallery-preview-close" id="galleryPreviewClose">×</button><div id="galleryPreviewContent"></div><div class="gallery-preview-actions"><button id="galleryPreviewDownload">${GICON.download} Download</button><button id="galleryPreviewCopy">${GICON.link} Copy URL</button><button id="galleryPreviewUse">${GICON.check} Use Image</button></div></div></div>
          </div>`;
        return;
    }


        // ---------- PREMIUM PAGES MANAGEMENT ----------
    if (cmsType === 'pages') {
        cmsList.innerHTML = `
          <div class="pages-premium-grid">
            ${cmsItems.map(item => {
                const title = item.title || item.name || item.label || item.pageKey || 'Untitled Page';
                const description = item.description || item.shortDescription || item.heroSubtitle || 'Manage this website page and its content.';
                const status = (item.status || 'draft').toLowerCase();
                const sections = Array.isArray(item.sections) ? item.sections.length : 0;

                return `
                  <article class="page-premium-card">
                    <div class="page-card-top">
                      <span class="page-card-icon">▤</span>
                      <span class="page-card-status ${cmsEscape(status)}">
                        ${cmsEscape(status)}
                      </span>
                    </div>

                    <div class="page-card-content">
                      <h3>${cmsEscape(title)}</h3>
                      <p>${cmsEscape(description)}</p>
                    </div>

                    <div class="page-card-meta">
                      <span>Page: ${cmsEscape(item.pageKey || 'Custom Page')}</span>
                      <span>${sections} Sections</span>
                    </div>

                    <div class="page-card-actions">
                      <button class="cms-action" data-edit="${cmsEscape(item._id)}">
                        ✎ Edit Page
                      </button>
                      <button class="cms-action danger" data-delete="${cmsEscape(item._id)}">
                        Delete
                      </button>
                    </div>
                  </article>
                `;
            }).join('')}
          </div>
        `;
        return;
    }
    
    cmsList.innerHTML = cmsItems.map(item => `
    <div class="cms-row">
      ${item.image ? `<img src="${cmsEscape(item.image)}" alt="" style="width:58px;height:48px;object-fit:cover;border-radius:7px;flex:0 0 58px">` : ''}
      <div><h4>${cmsEscape(item.title || item.name || item.label || item.subject || 'Untitled')}</h4>
      <p>${cmsEscape(item.shortDescription || item.description || item.slug || item.email || '')}</p>
      <small>${cmsEscape(item.status || 'Saved in MongoDB')}</small></div>
      <div class="cms-actions"><button class="cms-action" data-edit="${cmsEscape(item._id)}">Edit</button><button class="cms-action" data-delete="${cmsEscape(item._id)}">Delete</button></div>
    </div>`).join('');
}

/* ---------- FORM FIELD HELPER ---------- */

function setField(id, value) {
    const field = getEl(id);

    if (field) {
        field.value = value ?? '';
    }
}

/* ---------- OPEN PRODUCT FORM ---------- */

function openCmsForm(item = null) {
    if (!cmsModal || !cmsEditorForm) {
        cmsMessage('Product form HTML is missing. Please update admin.html.');
        return;
    }

    cmsEditingItem = item;
    cmsImageData = '';

    cmsEditorForm.reset();

    if (getEl('cmsFormTitle')) {
        getEl('cmsFormTitle').textContent =
            (item ? 'Edit ' : 'Add ') + cmsNames[cmsType];
    }

    setField('fTitle', item?.title || item?.name || item?.label || '');
    setField('fCategory', item?.category || '');
    setField('fShort', item?.shortDescription || '');
    setField('fDescription', item?.description || item?.content || '');

    setField(
        'fBenefits',
        Array.isArray(item?.benefits)
            ? item.benefits.join('\n')
            : item?.benefits || ''
    );

    setField(
        'fDosage',
        Array.isArray(item?.dosageForms)
            ? item.dosageForms.join(', ')
            : item?.dosageForms || ''
    );

    setField('fManufacturing', item?.manufacturingDetails || '');
    setField(
        'fImageUrl',
        window.cmsSelectedMediaUrl || item?.image || item?.url || ''
    );

    window.cmsSelectedMediaUrl = '';
    setField('fStatus', item?.status || 'draft');
    setField('fSeoTitle', item?.seoTitle || '');

    setField(
        'fKeywords',
        Array.isArray(item?.keywords)
            ? item.keywords.join(', ')
            : item?.keywords || ''
    );

    setField('fMeta', item?.metaDescription || '');
    setField('fSlug', item?.slug || '');
    setField('fPageKey', item?.pageKey || 'index.html');
    setField('fSelector', item?.selector || '');
    setField('fHtmlContent', item?.htmlContent || '');
    setField('fHeroTitle', item?.heroTitle || '');
    setField('fHeroSubtitle', item?.heroSubtitle || '');
    setField('fSections', item?.sections || '');

    const preview = getEl('fImagePreview');

    if (preview) {
        preview.hidden = !item?.image;
        preview.src = item?.image || '';
    }
    const asideImage = getEl('editorAsideImage');
    if (asideImage) asideImage.src = item?.image || 'img/banner.png';

    const productMode = cmsType === 'expertise';
    const pageMode = cmsType === 'pages';
    const showAllContentFields = ['pages', 'expertise', 'blogs'].includes(cmsType);

    const setFieldVisibility = (id, visible) => {
        const field = getEl(id);
        const wrapper = field?.closest('label') || field?.parentElement;
        if (wrapper) wrapper.style.display = visible ? '' : 'none';
    };
    ['fCategory'].forEach(id => setFieldVisibility(id, productMode || cmsType === 'media'));
    ['fBenefits', 'fDosage', 'fManufacturing'].forEach(id => setFieldVisibility(id, productMode));
    ['fSlug', 'fPageKey', 'fSelector', 'fHeroTitle', 'fHeroSubtitle', 'fSections', 'fHtmlContent'].forEach(id => setFieldVisibility(id, pageMode));
    ['fShort', 'fDescription', 'fImageUrl', 'fImageFile', 'fStatus', 'fSeoTitle', 'fKeywords', 'fMeta'].forEach(id => setFieldVisibility(id, showAllContentFields || cmsType === 'media' || cmsType === 'settings'));

    cmsModal.classList.add('open');
    cmsModal.setAttribute('aria-hidden', 'false');

    getEl('fTitle')?.focus();
}

/* ---------- CLOSE PRODUCT FORM ---------- */

function closeCmsForm() {
    if (!cmsModal) return;

    cmsModal.classList.remove('open');
    cmsModal.setAttribute('aria-hidden', 'true');

    cmsImageData = '';
    cmsEditingItem = null;
}

getEl('cmsClose')?.addEventListener('click', closeCmsForm);
getEl('cmsCancel')?.addEventListener('click', closeCmsForm);

cmsModal?.addEventListener('click', event => {
    if (event.target === cmsModal) {
        closeCmsForm();
    }
});

document.addEventListener('keydown', event => {
    if (
        event.key === 'Escape' &&
        cmsModal?.classList.contains('open')
    ) {
        closeCmsForm();
    }
});

/* ---------- IMAGE UPLOAD PREVIEW ---------- */

getEl('fImageFile')?.addEventListener('change', event => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
        cmsMessage('Please select a valid image.');
        event.target.value = '';
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        cmsMessage('Image must be 10 MB or smaller.');
        event.target.value = '';
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        cmsImageData = String(reader.result);

        const preview = getEl('fImagePreview');

        if (preview) {
            preview.src = cmsImageData;
            preview.hidden = false;
        }
        const asideImage = getEl('editorAsideImage');
        if (asideImage) asideImage.src = cmsImageData;
    };

    reader.readAsDataURL(file);
});

/* ---------- ADD NEW BUTTON ---------- */

getEl('cmsAdd')?.addEventListener('click', () => {
    if (['enquiries', 'careerApplications'].includes(cmsType)) {
        cmsMessage('Enquiries cannot be added manually.');
        return;
    }

    openCmsForm();
});

/* ---------- SAVE / UPDATE CONTENT ---------- */

cmsEditorForm?.addEventListener('submit', async event => {
    event.preventDefault();

    const title = getEl('fTitle')?.value.trim();

    if (!title) {
        cmsMessage('Please enter a title.');
        return;
    }

    let image = getEl('fImageUrl')?.value.trim() || cmsEditingItem?.image || '';
    const hasNewImage = Boolean(cmsImageData);

    const description =
        getEl('fDescription')?.value.trim() || '';

    const data = {
        title,
        name: title,
        label: title,

        category: getEl('fCategory')?.value.trim() || '',

        shortDescription:
            getEl('fShort')?.value.trim() || '',

        description,
        content: description,

        heroTitle: getEl('fHeroTitle')?.value.trim() || '',
        heroSubtitle: getEl('fHeroSubtitle')?.value.trim() || '',
        sections: getEl('fSections')?.value.trim() || '',

        benefits:
            (getEl('fBenefits')?.value || '')
                .split('\n')
                .map(value => value.trim())
                .filter(Boolean),

        dosageForms:
            (getEl('fDosage')?.value || '')
                .split(',')
                .map(value => value.trim())
                .filter(Boolean),

        manufacturingDetails:
            getEl('fManufacturing')?.value.trim() || '',

        image,

        status:
            getEl('fStatus')?.value || 'draft',

        seoTitle:
            getEl('fSeoTitle')?.value.trim() || '',

        keywords:
            (getEl('fKeywords')?.value || '')
                .split(',')
                .map(value => value.trim())
                .filter(Boolean),

        metaDescription:
            getEl('fMeta')?.value.trim() || '',

        pageKey: getEl('fPageKey')?.value.trim() || 'index.html',
        selector: getEl('fSelector')?.value.trim() || '',
        htmlContent: getEl('fHtmlContent')?.value || '',

        slug:
            getEl('fSlug')?.value.trim() ||
            cmsEditingItem?.slug ||
            title.toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
    };

    const saveButton = getEl('cmsSave');

    if (saveButton) {
        saveButton.disabled = true;
        saveButton.textContent = 'Saving…';
    }

    try {
        if (hasNewImage) {
            const upload = await cmsRequest('/api/admin/uploads/image', {
                method: 'POST',
                body: JSON.stringify({ data: cmsImageData, name: getEl('fTitle')?.value.trim() || 'Uploaded image', registerMedia: cmsType !== 'media' })
            });
            image = upload.url;
            data.image = image;
            if (cmsType === 'media') { data.url = upload.url; data.mimeType = upload.mimeType; data.size = upload.size; }
        }
        const editing = !!cmsEditingItem;

        const url =
            '/api/cms/' +
            cmsType +
            (editing ? '/' + cmsEditingItem._id : '');

        await cmsRequest(url, {
            method: editing ? 'PUT' : 'POST',
            body: JSON.stringify(data)
        });

        closeCmsForm();

        cmsMessage(
            editing
                ? 'Changes saved to MongoDB.'
                : 'Saved successfully to MongoDB.'
        );

        await cmsLoad();
        await refreshDashboardStats();

    } catch (error) {
        cmsMessage(error.message);

    } finally {
        if (saveButton) {
            saveButton.disabled = false;
            saveButton.textContent = 'Save Changes';
        }
    }
});


function applyGalleryFilters() {
    const search = (getEl('mediaSearch')?.value || '').toLowerCase().trim();
    const kind = document.querySelector('[data-media-filter].active')?.dataset.mediaFilter || 'all';
    const category = getEl('mediaCategoryFilter')?.value || 'all';
    const status = getEl('mediaStatusFilter')?.value || 'all';
    const sort = getEl('mediaSort')?.value || 'newest';
    const grid = getEl('mediaGrid'); if (!grid) return;
    const cards = [...grid.querySelectorAll('.media-card')];
    cards.forEach(card => { const isRecent = Date.now() - Number(card.dataset.date || 0) <= 7 * 24 * 60 * 60 * 1000; const match = card.dataset.search.includes(search) && (kind === 'all' || (kind === 'recent' ? isRecent : card.dataset.kind === kind)) && (category === 'all' || card.dataset.category === category) && (status === 'all' || card.dataset.status === status); card.style.display = match ? '' : 'none'; });
    const visible = cards.filter(card => card.style.display !== 'none');
    visible.sort((a, b) => sort === 'oldest' ? Number(a.dataset.date) - Number(b.dataset.date) : sort === 'name' ? a.dataset.name.localeCompare(b.dataset.name) : sort === 'largest' ? Number(b.dataset.size) - Number(a.dataset.size) : Number(b.dataset.date) - Number(a.dataset.date));
    visible.forEach(card => grid.appendChild(card));
}
cmsList?.addEventListener('input', event => { if (event.target.id === 'mediaSearch') applyGalleryFilters(); });
cmsList?.addEventListener('change', event => { if (['mediaCategoryFilter', 'mediaStatusFilter', 'mediaSort'].includes(event.target.id)) applyGalleryFilters(); });
cmsList?.addEventListener('click', event => {
    const filter = event.target.closest('[data-media-filter]');
    if (filter) { document.querySelectorAll('[data-media-filter]').forEach(x => x.classList.toggle('active', x === filter)); applyGalleryFilters(); }
    const view = event.target.closest('[data-gallery-view]');
    if (view) { document.querySelectorAll('[data-gallery-view]').forEach(x => x.classList.toggle('active', x === view)); getEl('mediaGrid')?.classList.toggle('list-view', view.dataset.galleryView === 'list'); }
    if (event.target.closest('#galleryPreviewClose')) { const m = getEl('galleryPreviewModal'); m?.classList.remove('open'); m?.setAttribute('aria-hidden', 'true'); }
    if (event.target.id === 'galleryPreviewModal') { event.target.classList.remove('open'); event.target.setAttribute('aria-hidden', 'true'); }
    if (event.target.closest('#galleryPreviewDownload') && window.cmsPreviewItem) { const a = document.createElement('a'); a.href = window.cmsPreviewItem.url || window.cmsPreviewItem.image || ''; a.download = window.cmsPreviewItem.title || window.cmsPreviewItem.name || 'cellartgen-media'; a.click(); }
    if (event.target.closest('#galleryPreviewCopy') && window.cmsPreviewItem) { const u = window.cmsPreviewItem.url || window.cmsPreviewItem.image || ''; navigator.clipboard?.writeText(new URL(u, location.origin).href).then(() => cmsMessage('Media URL copied.')).catch(() => cmsMessage('Could not copy URL.')); }
    if (event.target.closest('#galleryPreviewUse') && window.cmsPreviewItem) { window.cmsSelectedMediaUrl = window.cmsPreviewItem.url || window.cmsPreviewItem.image || ''; cmsMessage('Media selected. Open a page or expertise item to reuse it.'); }
    if (event.target.closest('#galleryUploadBtn') || event.target.closest('#quickAddImage') || event.target.closest('#quickAddVideo')) { getEl('cmsAdd')?.click(); }
    if (event.target.closest('#galleryCreateFolder') || event.target.closest('#quickCreateFolder')) cmsMessage('Folder management needs a category/folder field in the media records; existing media is unchanged.');
    if (event.target.closest('#galleryBulk')) cmsMessage('Select individual media actions to manage your files safely.');
    if (event.target.closest('#quickManageCategories')) cmsMessage('Use the Category field when editing a media item to manage its category.');
});

cmsList?.addEventListener('change', async event => {
    const select = event.target.closest('select[data-status]');
    if (!select) return;
    const id = select.dataset.status;
    const item = cmsItems.find(row => row._id === id);
    if (!item) return;
    const previous = item.status;
    select.disabled = true;
    try {
        await cmsRequest('/api/cms/' + cmsType + '/' + id, {
            method: 'PUT', body: JSON.stringify({ status: select.value })
        });
        item.status = select.value;
        cmsMessage('Application status updated.');
    } catch (error) {
        select.value = previous;
        cmsMessage(error.message);
    } finally { select.disabled = false; }
});

/* ---------- EXTERNAL NAVIGATION BRIDGE ---------- */
window.setCmsType = function (type) {
    if (!['expertise', 'pages', 'blogs', 'media', 'settings', 'enquiries', 'careerApplications'].includes(type)) return;
    cmsType = type;
    cmsMessage('');
    const addButton = getEl('cmsAdd');
    if (addButton) addButton.style.display = ['enquiries', 'careerApplications'].includes(type) ? 'none' : '';
    if (adminAuthenticated) cmsLoad();
};

/* ---------- CMS TABS ---------- */

getEl('cmsTabs')?.addEventListener('click', event => {
    const button = event.target.closest('button[data-type]');

    if (!button) return;

    document.querySelectorAll('#cmsTabs button').forEach(tab => {
        tab.classList.toggle('selected', tab === button);
    });

    cmsType = button.dataset.type;

    cmsMessage('');

    const addButton = getEl('cmsAdd');

    if (addButton) {
        addButton.style.display =
            ['enquiries', 'careerApplications'].includes(cmsType) ? 'none' : '';
    }

    cmsLoad();
});

/* ---------- EDIT / DELETE CONTENT ---------- */

cmsList?.addEventListener('click', async event => {
    const editButton = event.target.closest('[data-edit]');
    const deleteButton = event.target.closest('[data-delete]');

    try {
        const previewButton = event.target.closest('[data-preview]');
        if (previewButton) {
            const mediaItem = cmsItems.find(item => item._id === previewButton.dataset.preview);
            if (mediaItem) {
                const url = mediaItem.url || mediaItem.image || '';
                const isVideo = (mediaItem.mimeType || '').startsWith('video/');
                const modal = getEl('galleryPreviewModal');
                const content = getEl('galleryPreviewContent');
                if (content) content.innerHTML = isVideo ? `<video src="${cmsEscape(url)}" controls autoplay></video>` : `<img src="${cmsEscape(url)}" alt="${cmsEscape(mediaItem.title || mediaItem.name || 'Media preview')}">`;
                if (modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }
                window.cmsPreviewItem = mediaItem;
                return;
            }
        }
        const reuseButton = event.target.closest('[data-reuse]');
        const copyButton = event.target.closest('[data-copy]');

        if (reuseButton || copyButton) {
            const mediaId = reuseButton
                ? reuseButton.dataset.reuse
                : copyButton.dataset.copy;

            const mediaItem = cmsItems.find(item => item._id === mediaId);
            const mediaUrl = mediaItem?.url || mediaItem?.image || '';

            if (!mediaUrl) {
                cmsMessage('Media URL not found.');
                return;
            }

            if (reuseButton) {
                window.cmsSelectedMediaUrl = mediaUrl;

                reuseButton.textContent = '✓ Image Selected';
                reuseButton.classList.add('media-selected');

                const card = reuseButton.closest('.media-card');
                if (card) card.classList.add('media-card-selected');

                cmsMessage('✓ Image selected successfully! Now open Pages or Our Expertise.');

                setTimeout(() => {
                    reuseButton.textContent = 'Reuse Image';
                    reuseButton.classList.remove('media-selected');
                }, 2500);

                return;
            }
            try {
                await navigator.clipboard.writeText(
                    new URL(mediaUrl, window.location.origin).href
                );
                cmsMessage('Media URL copied.');
            } catch (error) {
                cmsMessage('Could not copy URL. Please copy it manually.');
            }

            return;
        }

        if (editButton) {
            const item = cmsItems.find(
                value => value._id === editButton.dataset.edit
            );

            if (item) openCmsForm(item);
        }

        if (deleteButton) {
            const confirmed = confirm(
                'Delete this entry permanently?'
            );

            if (!confirmed) return;

            await cmsRequest(
                '/api/cms/' +
                cmsType +
                '/' +
                deleteButton.dataset.delete,
                { method: 'DELETE' }
            );

            cmsMessage('Entry deleted.');

            await cmsLoad();
            await refreshDashboardStats();
        }

    } catch (error) {
        cmsMessage(error.message);
    }
});

/* ---------- INITIAL LOAD ---------- */

if (adminAuthenticated) {
    cmsLoad();
    refreshDashboardStats();
}




/* ---------- DASHBOARD NOTIFICATIONS ---------- */

(() => {
    const bell = getEl('notificationBell');
    const panel = getEl('notificationPanel');
    const closeBtn = getEl('closeNotifications');
    const list = getEl('notificationList');
    const count = getEl('notificationCount');

    if (!bell || !panel || !list || !count) return;

    const style = document.createElement('style');
    style.textContent = `
        #notificationPanel[hidden] { display:none !important; }
        #notificationPanel {
            position:absolute; top:55px; right:0; z-index:9999;
            width:320px; max-width:90vw; max-height:420px;
            overflow-y:auto; background:#fff; color:#243047;
            border:1px solid #e5eaf2; border-radius:14px;
            box-shadow:0 12px 35px rgba(20,40,80,.18);
            padding:15px;
        }
        .notification-header {
            display:flex; justify-content:space-between;
            align-items:center; margin-bottom:12px;
        }
        .notification-header button {
            border:0; background:none; font-size:23px; cursor:pointer;
        }
        .notification-item {
            display:block; width:100%; text-align:left;
            padding:12px; margin:7px 0; border:1px solid #edf0f5;
            border-radius:9px; background:#f8faff; cursor:pointer;
            color:#243047;
        }
        .notification-item strong { display:block; font-size:13px; }
        .notification-item small {
            display:block; margin-top:5px; color:#718096;
        }
        #notificationList p { font-size:13px; color:#718096; }
        .top-tools { position:relative; }
    `;
    document.head.appendChild(style);

    function getRows(response, keys) {
        if (Array.isArray(response)) return response;
        if (!response || typeof response !== 'object') return [];

        for (const key of keys) {
            if (Array.isArray(response[key])) return response[key];
        }

        for (const key of ['data', 'result', 'results']) {
            if (response[key] && typeof response[key] === 'object') {
                const rows = getRows(response[key], keys);
                if (rows.length) return rows;
            }
        }

        return [];
    }

    function getName(item) {
        return item.name || item.fullName ||
            item.applicantName || item.firstName ||
            item.email || 'New submission';
    }

  
function showEnquiryPopup(title, item, section) {
    document.getElementById('enquiryDetailPopup')?.remove();
    document.getElementById('pharmaGlassPopupStyle')?.remove();

    const style = document.createElement('style');
    style.id = 'pharmaGlassPopupStyle';
    style.textContent = `
        @keyframes cellartFade {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes cellartSlide {
            from { opacity: 0; transform: translateY(30px) scale(.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .pg-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(3,22,49,.60);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            animation: cellartFade .3s ease;
        }

        .pg-card {
            width: 100%;
            max-width: 680px;
            max-height: 88vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(255,255,255,.85);
            border-radius: 24px;
            background: linear-gradient(145deg,rgba(255,255,255,.97),rgba(235,246,255,.94));
            box-shadow: 0 30px 90px rgba(0,25,65,.38),
                        0 0 35px rgba(32,145,220,.18);
            animation: cellartSlide .45s cubic-bezier(.2,.8,.2,1);
        }

        .pg-header {
            padding: 25px 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            color: white;
            background: linear-gradient(115deg,#062d5c,#075c99,#0789c5);
            position: relative;
            overflow: hidden;
        }

        .pg-header:after {
            content: "";
            position: absolute;
            width: 220px;
            height: 220px;
            right: 50px;
            top: -150px;
            border-radius: 50%;
            background: rgba(255,255,255,.10);
        }

        .pg-heading {
            position: relative;
            z-index: 1;
        }

        .pg-heading h2 {
            margin: 0;
            font-size: 22px;
            font-weight: 750;
            letter-spacing: .2px;
        }

        .pg-heading p {
            margin: 8px 0 0;
            font-size: 10px;
            letter-spacing: 2px;
            color: #d9efff;
        }

        .pg-close {
            position: relative;
            z-index: 2;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(255,255,255,.35);
            border-radius: 13px;
            background: rgba(255,255,255,.13);
            color: white;
            font-size: 25px;
            cursor: pointer;
            transition: .3s;
        }

        .pg-close:hover {
            background: rgba(255,255,255,.3);
            transform: rotate(90deg);
        }

        .pg-body {
            padding: 27px 28px;
            overflow-y: auto;
        }

        .pg-section-title {
            display: flex;
            align-items: center;
            gap: 11px;
            margin-bottom: 22px;
            color: #075b98;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.8px;
            text-transform: uppercase;
        }

        .pg-section-title:before {
            content: "";
            width: 4px;
            height: 21px;
            border-radius: 5px;
            background: linear-gradient(#10a6e8,#07518e);
        }

        .pg-grid {
            display: grid;
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 17px;
        }

        .pg-field {
            min-width: 0;
        }

        .pg-field.pg-wide {
            grid-column: 1 / -1;
        }

        .pg-key {
            display: block;
            margin: 0 0 8px 3px;
            color: #55728d;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 1.1px;
            text-transform: uppercase;
        }

        .pg-value {
            min-height: 45px;
            display: flex;
            align-items: center;
            padding: 12px 15px;
            border: 1px solid rgba(113,165,205,.35);
            border-radius: 13px;
            background: rgba(255,255,255,.68);
            color: #173b5b;
            font-size: 13px;
            line-height: 1.7;
            overflow-wrap: anywhere;
            white-space: pre-wrap;
            box-shadow: 0 4px 14px rgba(30,85,130,.055),
                        inset 0 1px 2px rgba(255,255,255,.8);
            transition: .25s ease;
        }

        .pg-field:hover .pg-value {
            border-color: #65b5e3;
            background: rgba(255,255,255,.94);
            box-shadow: 0 7px 20px rgba(0,105,175,.12);
        }

        .pg-message {
            min-height: 115px;
            align-items: flex-start;
        }

        .pg-empty {
            padding: 30px 20px;
            border: 1px dashed #9fc5e3;
            border-radius: 15px;
            background: rgba(255,255,255,.6);
            color: #58748d;
            text-align: center;
        }

        .pg-footer {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            padding: 18px 28px;
            border-top: 1px solid rgba(100,155,195,.22);
            background: rgba(241,248,255,.85);
        }

        .pg-btn {
            min-width: 105px;
            padding: 12px 20px;
            border: 0;
            border-radius: 11px;
            background: linear-gradient(120deg,#087fc1,#07518e);
            color: white;
            font-size: 12px;
            font-weight: 750;
            cursor: pointer;
            box-shadow: 0 6px 17px rgba(0,95,165,.2);
            transition: .25s;
        }

        .pg-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(0,95,165,.3);
        }

        .pg-cancel {
            color: #31536f;
            background: #e5f0f9;
            box-shadow: none;
        }

        @media(max-width:520px) {
            .pg-overlay { padding: 10px; }
            .pg-card { border-radius: 18px; max-height: 93vh; }
            .pg-header { padding: 19px; }
            .pg-body { padding: 20px 17px; }
            .pg-grid { grid-template-columns: 1fr; gap: 13px; }
            .pg-field.pg-wide { grid-column: auto; }
            .pg-footer { padding: 15px 17px; }
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'enquiryDetailPopup';
    overlay.className = 'pg-overlay';

    const card = document.createElement('div');
    card.className = 'pg-card';

    const header = document.createElement('div');
    header.className = 'pg-header';

    const headingBox = document.createElement('div');
    headingBox.className = 'pg-heading';

    const heading = document.createElement('h2');
    heading.textContent = title || 'Notification Details';

    const subtitle = document.createElement('p');
    subtitle.textContent = 'CELLARTGEN LAB PRIVATE LIMITED';

    headingBox.append(heading, subtitle);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'pg-close';
    closeBtn.type = 'button';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close popup');

    header.append(headingBox, closeBtn);

    const body = document.createElement('div');
    body.className = 'pg-body';

    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'pg-section-title';
    sectionTitle.textContent = 'Enquiry / Application Details';

    body.appendChild(sectionTitle);

    const grid = document.createElement('div');
    grid.className = 'pg-grid';

    const excluded = ['__v', 'password', 'token'];

    function formatLabel(key) {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/[_-]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    function formatValue(value) {
        if (value === null || value === undefined || value === '') {
            return 'Not provided';
        }

        if (typeof value === 'object') {
            if (value instanceof Date) return value.toLocaleString();
            return JSON.stringify(value, null, 2);
        }

        return String(value);
    }

    const entries = item && typeof item === 'object'
        ? Object.entries(item).filter(([key]) => !excluded.includes(key))
        : [];

    if (entries.length) {
        entries.forEach(([key, value]) => {
            const field = document.createElement('div');
            field.className = 'pg-field';

            const wide = [
                'message', 'description', 'coverletter',
                'cover_letter', 'address'
            ].includes(key.toLowerCase());

            if (wide) field.classList.add('pg-wide');

            const label = document.createElement('label');
            label.className = 'pg-key';
            label.textContent = formatLabel(key);

            const valueBox = document.createElement('div');
            valueBox.className = 'pg-value';

            if (wide) valueBox.classList.add('pg-message');

            valueBox.textContent = formatValue(value);

            field.append(label, valueBox);
            grid.appendChild(field);
        });

        body.appendChild(grid);
    } else {
        const empty = document.createElement('div');
        empty.className = 'pg-empty';
        empty.textContent = 'No notification information is available.';
        body.appendChild(empty);
    }

    const footer = document.createElement('div');
    footer.className = 'pg-footer';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'pg-btn pg-cancel';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Close';

    const actionBtn = document.createElement('button');
    actionBtn.className = 'pg-btn';
    actionBtn.type = 'button';
    actionBtn.textContent = 'Open Dashboard';

    footer.append(cancelBtn, actionBtn);
    card.append(header, body, footer);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    function closePopup() {
        overlay.remove();
        style.remove();
        document.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(event) {
        if (event.key === 'Escape') closePopup();
    }

    closeBtn.addEventListener('click', closePopup);
    cancelBtn.addEventListener('click', closePopup);

    overlay.addEventListener('click', event => {
        if (event.target === overlay) closePopup();
    });

    document.addEventListener('keydown', handleEscape);

    actionBtn.addEventListener('click', () => {
        closePopup();

        const navItem = document.querySelector(
            `#sideNav [data-section="${section}"]`
        );

        if (navItem) navItem.click();
    });
}

    function addNotification(title, description, section, item) {

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'notification-item';

        const heading = document.createElement('strong');
        heading.textContent = title;

        const detail = document.createElement('small');
        detail.textContent = description;

        button.append(heading, detail);

        button.addEventListener('click', () => {
            panel.hidden = true;
            bell.setAttribute('aria-expanded', 'false');

            showEnquiryPopup(title, item, section);
        });

        list.appendChild(button);
    }

    async function loadNotifications() {
        list.replaceChildren();

        const loading = document.createElement('p');
        loading.textContent = 'Loading notifications...';
        list.appendChild(loading);

        try {
            const results = await Promise.allSettled([
                apiRequest('/api/cms/enquiries'),
                apiRequest('/api/cms/careerApplications')
            ]);

            const enquiries = results[0].status === 'fulfilled'
                ? getRows(results[0].value, ['enquiries', 'items'])
                : [];

            const careers = results[1].status === 'fulfilled'
                ? getRows(results[1].value, ['careerApplications', 'applications', 'items'])
                : [];

            const total = enquiries.length + careers.length;
            count.textContent = total > 99 ? '99+' : String(total);

            list.replaceChildren();

            console.log('ENQUIRY DATA:', enquiries);
            console.log('CAREER DATA:', careers);

            if (!total) {
                const empty = document.createElement('p');
                empty.textContent = 'No notifications available.';
                list.appendChild(empty);
                return;
            }

            enquiries.slice(0, 5).forEach(item => {
                addNotification(
                    'New Website Enquiry',
                    getName(item) + (item.email ? ' · ' + item.email : ''),
                    'enquiries',
                    item
                );
            });

            careers.slice(0, 5).forEach(item => {
                addNotification(
                    'New Career Application',
                    getName(item) + (item.email ? ' · ' + item.email : ''),
                    'careerApplications',
                    item
                );
            });

        } catch (error) {
            list.replaceChildren();
            const message = document.createElement('p');
            message.textContent = 'Notifications could not be loaded.';
            list.appendChild(message);
            console.error('Notification error:', error);
        }
    }

    bell.addEventListener('click', async () => {
        panel.hidden = !panel.hidden;
        bell.setAttribute('aria-expanded', String(!panel.hidden));

        if (!panel.hidden) {
            await loadNotifications();
        }
    });

    closeBtn?.addEventListener('click', () => {
        panel.hidden = true;
        bell.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', event => {
        if (!panel.contains(event.target) && !bell.contains(event.target)) {
            panel.hidden = true;
            bell.setAttribute('aria-expanded', 'false');
        }
    });

    loadNotifications();
})();