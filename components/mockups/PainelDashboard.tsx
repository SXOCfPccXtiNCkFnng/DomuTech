import React from 'react';
import {
    CalendarBlankIcon,
    ChartBarIcon,
    ChecksIcon,
    ChatCircleIcon,
    FileTextIcon,
    GearSixIcon,
    HouseIcon,
    ArrowsClockwiseIcon,
    PaperPlaneTiltIcon,
    RobotIcon,
    ShieldCheckIcon,
    UsersIcon,
} from '@phosphor-icons/react';

const NAV = [
    { icon: HouseIcon, label: 'Painel', active: true },
    { icon: PaperPlaneTiltIcon, label: 'Campanhas' },
    { icon: ArrowsClockwiseIcon, label: 'Follow-up' },
    { icon: FileTextIcon, label: 'Modelos de mensagem' },
    { icon: UsersIcon, label: 'Contatos' },
    { icon: RobotIcon, label: 'Atendente IA' },
    { icon: CalendarBlankIcon, label: 'Agenda' },
    { icon: ChartBarIcon, label: 'Resultados' },
] as const;

const KPIS = [
    { label: 'Total de disparos', value: '12.480', trend: '+18,2%', icon: PaperPlaneTiltIcon },
    { label: 'Taxa de entrega', value: '98,6%', trend: '+0,4%', icon: ChecksIcon },
    { label: 'Conversas', value: '3.214', trend: '+26,9%', icon: ChatCircleIcon },
] as const;

const CAMPAIGNS = [
    { name: 'Promoção de sexta', status: 'Enviando', sent: '1.248', read: '64%', progress: 72 },
    { name: 'Lembrete de retorno', status: 'Agendada', sent: '—', read: '—', when: 'Hoje, 18:00' },
    { name: 'Lançamento outubro', status: 'Concluída', sent: '3.902', read: '71%' },
    { name: 'Reativação de clientes', status: 'Concluída', sent: '2.115', read: '58%' },
] as const;

const SERIES = [32, 38, 35, 44, 41, 52, 48, 57, 55, 63, 60, 71, 68, 76, 74, 83];
const REPLIES = [10, 12, 11, 15, 14, 19, 17, 21, 20, 24, 23, 28, 26, 31, 30, 35];

const toPath = (values: readonly number[], w: number, h: number, max: number) =>
    values
        .map((v, i) => {
            const x = (i / (values.length - 1)) * w;
            const y = h - (v / max) * h;
            return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(' ');

const Chart: React.FC = () => {
    const w = 400;
    const h = 120;
    const max = 90;
    const line = toPath(SERIES, w, h, max);
    const replies = toPath(REPLIES, w, h, max);
    return (
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="dash__chart-svg">
            {[0.25, 0.5, 0.75].map((p) => (
                <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} className="dash__grid" />
            ))}
            <path d={`${line} L${w},${h} L0,${h} Z`} className="dash__area" />
            <path d={line} className="dash__line" />
            <path d={replies} className="dash__line dash__line--muted" />
        </svg>
    );
};

const statusClass = (status: string) =>
    status === 'Enviando' ? 'is-live' : status === 'Agendada' ? 'is-scheduled' : 'is-done';

const PainelDashboard: React.FC = () => (
    <div className="dash">
        <aside className="dash__side">
            <div className="dash__brand">
                <img src="/logos/logo.png" alt="" />
                Domu
            </div>
            <ul>
                {NAV.map(({ icon: Icon, label, ...rest }) => (
                    <li key={label} className={'active' in rest ? 'is-active' : ''}>
                        <Icon /> {label}
                    </li>
                ))}
            </ul>
            <div className="dash__side-foot">
                <GearSixIcon /> Configurações
            </div>
        </aside>

        <div className="dash__main">
            <div className="dash__head">
                <div>
                    <small>Visão geral</small>
                    <strong>Painel</strong>
                </div>
                <div className="dash__seg">
                    <span>Hoje</span>
                    <span>7 dias</span>
                    <span className="is-on">30 dias</span>
                </div>
            </div>

            <div className="dash__kpis">
                {KPIS.map(({ label, value, trend, icon: Icon }) => (
                    <div key={label} className="dash__kpi">
                        <span className="dash__kpi-label">
                            {label} <Icon />
                        </span>
                        <strong>{value}</strong>
                        <small className="up">{trend} vs anterior</small>
                    </div>
                ))}
                <div className="dash__kpi">
                    <span className="dash__kpi-label">
                        Conta Meta <ShieldCheckIcon className="ok" />
                    </span>
                    <strong className="ok">Conectada</strong>
                    <small>
                        <span className="dash__chip">Qualidade alta</span>
                    </small>
                </div>
            </div>

            <div className="dash__row">
                <div className="dash__card dash__chart">
                    <div className="dash__card-head">
                        <span>Disparos e respostas</span>
                        <span className="dash__legend">
                            <i /> Disparos <i className="muted" /> Respostas
                        </span>
                    </div>
                    <Chart />
                </div>

                <div className="dash__card dash__table">
                    <div className="dash__card-head">
                        <span>Campanhas recentes</span>
                        <span className="dash__link">Ver todas</span>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Campanha</th>
                                <th>Status</th>
                                <th>Enviados</th>
                                <th>Lidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CAMPAIGNS.map((c) => (
                                <tr key={c.name}>
                                    <td>
                                        {c.name}
                                        {'progress' in c && (
                                            <span className="dash__progress">
                                                <i style={{ width: `${c.progress}%` }} />
                                            </span>
                                        )}
                                        {'when' in c && <small>{c.when}</small>}
                                    </td>
                                    <td>
                                        <span className={`dash__status ${statusClass(c.status)}`}>{c.status}</span>
                                    </td>
                                    <td>{c.sent}</td>
                                    <td>{c.read}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default PainelDashboard;
