import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Widget4Icon,
    ShopIcon,
    SettingsIcon,
    LogoutIcon,
    GlobalIcon,
    BoltIcon,
    CodeSolar,
    PaletteSolar,
    CheckCircleIcon,
    ClockCircleIcon,
    AddIcon,
} from './icons';

type TabId = 'inicio' | 'servicos' | 'layouts' | 'conta';

const NAV: { id: TabId; label: string; icon: typeof Widget4Icon }[] = [
    { id: 'inicio', label: 'Início', icon: Widget4Icon },
    { id: 'servicos', label: 'Serviços', icon: GlobalIcon },
    { id: 'layouts', label: 'Layouts', icon: Widget4Icon },
    { id: 'conta', label: 'Conta', icon: SettingsIcon },
];

const CATALOG = [
    {
        title: 'Título placeholder 01',
        desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.',
        price: 'R$ 0,00',
        icon: GlobalIcon,
    },
    {
        title: 'Título placeholder 02',
        desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.',
        price: 'R$ 0,00',
        icon: BoltIcon,
    },
    {
        title: 'Título placeholder 03',
        desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.',
        price: 'R$ 0,00',
        icon: CodeSolar,
    },
    {
        title: 'Título placeholder 04',
        desc: 'Texto placeholder. Conteúdo temporário para layout e revisão visual.',
        price: 'R$ 0,00',
        icon: PaletteSolar,
    },
] as const;

const LAYOUTS = [
    { name: 'Título placeholder 01', category: 'Categoria placeholder', status: 'Placeholder' },
    { name: 'Título placeholder 02', category: 'Categoria placeholder', status: 'Placeholder' },
    { name: 'Título placeholder 03', category: 'Categoria placeholder', status: 'Placeholder' },
] as const;

const TITLES: Record<TabId, { eyebrow: string; title: string }> = {
    inicio: { eyebrow: 'Tag placeholder', title: 'Título placeholder' },
    servicos: { eyebrow: 'Tag placeholder', title: 'Título placeholder' },
    layouts: { eyebrow: 'Tag placeholder', title: 'Título placeholder' },
    conta: { eyebrow: 'Tag placeholder', title: 'Título placeholder' },
};

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState<TabId>('inicio');
    const [accountName, setAccountName] = useState('André Vitor');
    const [accountEmail, setAccountEmail] = useState('andre.vitor@tec4udigital.com');
    const [savedNote, setSavedNote] = useState<string | null>(null);

    const head = TITLES[tab];

    const handleSaveAccount = (event: React.FormEvent) => {
        event.preventDefault();
        if (!accountName.trim() || !accountEmail.trim()) {
            setSavedNote('Preencha nome e e-mail.');
            return;
        }
        setSavedNote('Dados salvos só neste preview (ainda sem banco).');
    };

    return (
        <div className="dashboard">
            <aside className="dashboard__sidebar">
                <Link to="/" className="dashboard__brand" aria-label="Voltar ao site Domu">
                    <img src="/domu-mark.png" alt="DOMU STUDIO" />
                </Link>

                <nav className="dashboard__nav" aria-label="Painel">
                    {NAV.map((item) => {
                        const Icon = item.icon;
                        const active = tab === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                className={`dashboard__nav-item ${active ? 'is-active' : ''}`}
                                aria-current={active ? 'page' : undefined}
                                onClick={() => {
                                    setTab(item.id);
                                    setSavedNote(null);
                                }}
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="dashboard__signout"
                    onClick={() => navigate('/login')}
                >
                    <LogoutIcon className="w-4 h-4" />
                    Sair
                </button>
            </aside>

            <div className="dashboard__main">
                <header className="dashboard__top">
                    <div>
                        <p className="dashboard__eyebrow">{head.eyebrow}</p>
                        <h1>{head.title}</h1>
                    </div>
                    <span className="dashboard__badge">Placeholder</span>
                </header>

                <div className="dashboard__banner" role="status">
                    Texto placeholder. Conteúdo temporário para layout e revisão visual.
                </div>

                {tab === 'inicio' && (
                    <>
                        <section className="dashboard__section">
                            <div className="dashboard__section-head">
                                <h2>Resumo</h2>
                            </div>
                            <div className="dashboard__stats">
                                <article className="dashboard__stat">
                                    <CheckCircleIcon className="w-5 h-5" />
                                    <div>
                                        <strong>0</strong>
                                        <span>serviços ativos</span>
                                    </div>
                                </article>
                                <article className="dashboard__stat">
                                    <ClockCircleIcon className="w-5 h-5" />
                                    <div>
                                        <strong>0</strong>
                                        <span>pedidos em andamento</span>
                                    </div>
                                </article>
                                <article className="dashboard__stat">
                                    <ShopIcon className="w-5 h-5" />
                                    <div>
                                        <strong>{LAYOUTS.length}</strong>
                                        <span>layouts no catálogo</span>
                                    </div>
                                </article>
                            </div>
                        </section>

                        <section className="dashboard__section">
                            <div className="dashboard__section-head">
                                <h2>Comece por aqui</h2>
                                <button
                                    type="button"
                                    className="dashboard__ghost-btn dashboard__ghost-btn--active"
                                    onClick={() => setTab('servicos')}
                                >
                                    <AddIcon className="w-4 h-4" />
                                    Ver serviços
                                </button>
                            </div>
                            <div className="dashboard__grid">
                                {CATALOG.slice(0, 3).map((svc) => {
                                    const Icon = svc.icon;
                                    return (
                                        <article key={svc.title} className="dashboard__card">
                                            <div className="dashboard__card-icon">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3>{svc.title}</h3>
                                            <p>{svc.desc}</p>
                                            <span>{svc.price}</span>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="dashboard__section">
                            <div className="dashboard__section-head">
                                <h2>Atalhos</h2>
                            </div>
                            <div className="dashboard__shortcuts">
                                <button type="button" className="dashboard__shortcut" onClick={() => setTab('layouts')}>
                                    Abrir layouts no painel
                                </button>
                                <Link to="/layouts" className="dashboard__shortcut">
                                    Loja pública de layouts
                                </Link>
                                <Link to="/" className="dashboard__shortcut">
                                    Voltar à landing
                                </Link>
                            </div>
                        </section>
                    </>
                )}

                {tab === 'servicos' && (
                    <section className="dashboard__section">
                        <div className="dashboard__section-head">
                            <h2>Catálogo interno</h2>
                            <button type="button" className="dashboard__ghost-btn" disabled>
                                Contratar (em breve)
                            </button>
                        </div>
                        <div className="dashboard__list">
                            {CATALOG.map((svc) => {
                                const Icon = svc.icon;
                                return (
                                    <article key={svc.title} className="dashboard__list-item">
                                        <div className="dashboard__card-icon">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="dashboard__list-body">
                                            <h3>{svc.title}</h3>
                                            <p>{svc.desc}</p>
                                        </div>
                                        <div className="dashboard__list-meta">
                                            <span>{svc.price}</span>
                                            <button type="button" className="dashboard__mini-btn" disabled>
                                                Contratar
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                )}

                {tab === 'layouts' && (
                    <section className="dashboard__section">
                        <div className="dashboard__section-head">
                            <h2>Templates da conta</h2>
                            <Link to="/layouts" className="dashboard__ghost-btn dashboard__ghost-btn--active">
                                Ver loja pública
                            </Link>
                        </div>
                        <div className="dashboard__list">
                            {LAYOUTS.map((layout) => (
                                <article key={layout.name} className="dashboard__list-item">
                                    <div className="dashboard__card-icon">
                                        <Widget4Icon className="w-5 h-5" />
                                    </div>
                                    <div className="dashboard__list-body">
                                        <h3>{layout.name}</h3>
                                        <p>{layout.category}</p>
                                    </div>
                                    <div className="dashboard__list-meta">
                                        <span>{layout.status}</span>
                                        <button type="button" className="dashboard__mini-btn" disabled>
                                            Aplicar
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {tab === 'conta' && (
                    <section className="dashboard__section">
                        <div className="dashboard__section-head">
                            <h2>Dados da conta</h2>
                        </div>
                        <form className="dashboard__form" onSubmit={handleSaveAccount} noValidate>
                            <label className="dashboard__field">
                                <span>Nome</span>
                                <input
                                    type="text"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                    autoComplete="name"
                                />
                            </label>
                            <label className="dashboard__field">
                                <span>E-mail</span>
                                <input
                                    type="email"
                                    value={accountEmail}
                                    onChange={(e) => setAccountEmail(e.target.value)}
                                    autoComplete="email"
                                />
                            </label>
                            <label className="dashboard__field">
                                <span>Papel</span>
                                <input type="text" value="Dono da conta (preview)" disabled readOnly />
                            </label>
                            <button type="submit" className="login-page__btn login-page__btn--primary dashboard__submit">
                                Salvar alterações
                            </button>
                            {savedNote && (
                                <p className="dashboard__form-note" role="status">
                                    {savedNote}
                                </p>
                            )}
                        </form>
                    </section>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
