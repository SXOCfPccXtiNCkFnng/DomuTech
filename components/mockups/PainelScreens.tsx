import React from 'react';
import {
    CheckIcon,
    ClockIcon,
    ImageIcon,
    LightbulbIcon,
    PaperPlaneRightIcon,
    RobotIcon,
    SparkleIcon,
    TrendUpIcon,
    UsersIcon,
    WarningIcon,
} from '@phosphor-icons/react';

export const ConnectScreen: React.FC = () => (
    <div className="screen">
        <div className="screen__head">
            <strong>Conectar WhatsApp</strong>
            <span className="screen__badge is-ok">Cadastro oficial Meta</span>
        </div>
        <ul className="checklist">
            {[
                ['Conta Meta Business', 'Verificada'],
                ['Número do WhatsApp', '+55 11 9•••• 4360'],
                ['Coexistência com o celular', 'Ativa'],
                ['Qualidade do número', 'Alta'],
                ['Limite de envios (24h)', '10.000 conversas'],
            ].map(([label, value]) => (
                <li key={label}>
                    <span className="checklist__icon">
                        <CheckIcon weight="bold" />
                    </span>
                    <span>{label}</span>
                    <b>{value}</b>
                </li>
            ))}
        </ul>
    </div>
);

export const CampaignScreen: React.FC = () => (
    <div className="screen">
        <div className="screen__steps">
            {['Oferta', 'Público', 'Agendamento', 'Envio'].map((s, i) => (
                <span key={s} className={i < 3 ? 'is-done' : ''}>
                    <i>{i + 1}</i> {s}
                </span>
            ))}
        </div>
        <div className="campaign">
            <div className="campaign__preview">
                <div className="campaign__media">
                    <ImageIcon />
                </div>
                <p>
                    Olá, <b>{'{{nome}}'}</b>! Nesta sexta tem 20% de desconto em todos os serviços.
                    Quer garantir o seu horário?
                </p>
                <span className="campaign__btn">Quero agendar</span>
            </div>
            <div className="campaign__meta">
                <div>
                    <small>Modelo</small>
                    <strong>promo_sexta_v2</strong>
                    <span className="screen__badge is-ok">Aprovado pela Meta</span>
                </div>
                <div>
                    <small>Público</small>
                    <strong>
                        <UsersIcon /> 1.240 contatos
                    </strong>
                    <span className="campaign__tags">
                        <i>Clientes ativos</i>
                        <i>Zona Sul</i>
                    </span>
                </div>
                <div>
                    <small>Envio</small>
                    <strong>
                        <ClockIcon /> Sexta, 18:00
                    </strong>
                </div>
                <span className="campaign__go">Agendar campanha</span>
            </div>
        </div>
    </div>
);

export const ChatScreen: React.FC = () => (
    <div className="screen screen--chat">
        <div className="chat__head">
            <span className="chat__avatar">
                <RobotIcon />
            </span>
            <div>
                <strong>Atendente IA</strong>
                <small>respondendo agora · 23:41</small>
            </div>
        </div>
        <div className="chat__body">
            <p className="msg msg--in">Oi! Vi a promoção. Ainda tem horário amanhã?</p>
            <p className="msg msg--out">
                Oi, Juliana! Tenho às 14h ou às 16h30 para limpeza de pele. Qual prefere?
            </p>
            <p className="msg msg--in">16h30, por favor</p>
            <p className="msg msg--out">
                Prontinho, agendado para amanhã às 16h30. Te envio um lembrete uma hora antes.
            </p>
            <span className="chat__event">
                <CheckIcon weight="bold" /> Agendamento criado na agenda
            </span>
        </div>
        <div className="chat__input">
            Mensagem <PaperPlaneRightIcon weight="fill" />
        </div>
    </div>
);

const FUNNEL = [
    { label: 'Enviados', value: 3902, pct: 100 },
    { label: 'Entregues', value: 3851, pct: 98.7 },
    { label: 'Lidos', value: 2770, pct: 71 },
    { label: 'Responderam', value: 842, pct: 21.6 },
    { label: 'Agendamentos', value: 213, pct: 5.5 },
] as const;

const INSIGHTS = [
    {
        kind: 'up',
        title: 'Dispare às 18h nas sextas',
        text: 'Suas campanhas nesse horário têm 34% mais respostas.',
    },
    {
        kind: 'warn',
        title: '212 contatos sem resposta há 7 dias',
        text: 'Ative um follow-up com uma oferta diferente para esse grupo.',
    },
    {
        kind: 'tip',
        title: 'Mensagens com botão convertem mais',
        text: 'Adicione "Quero agendar" ao modelo promo_sexta_v2.',
    },
] as const;

export const InsightsScreen: React.FC = () => (
    <div className="screen">
        <div className="screen__head">
            <strong>
                <SparkleIcon weight="fill" className="insights__spark" /> Insights da IA
            </strong>
            <span className="screen__badge is-ok">3 sugestões novas</span>
        </div>
        <div className="insights__score">
            <div>
                <small>Saúde das campanhas</small>
                <strong>82</strong>
                <span>/100</span>
            </div>
            <span className="insights__meter">
                <i style={{ width: '82%' }} />
            </span>
        </div>
        <ul className="insights">
            {INSIGHTS.map((i) => (
                <li key={i.title} className={`insights__item is-${i.kind}`}>
                    <span className="insights__icon">
                        {i.kind === 'up' ? <TrendUpIcon /> : i.kind === 'warn' ? <WarningIcon /> : <LightbulbIcon />}
                    </span>
                    <div>
                        <strong>{i.title}</strong>
                        <small>{i.text}</small>
                    </div>
                    <span className="insights__apply">Aplicar</span>
                </li>
            ))}
        </ul>
    </div>
);

export const ResultsScreen: React.FC = () => (
    <div className="screen">
        <div className="screen__head">
            <strong>Lançamento outubro</strong>
            <span className="screen__badge">Concluída</span>
        </div>
        <ul className="funnel">
            {FUNNEL.map((f) => (
                <li key={f.label}>
                    <span>{f.label}</span>
                    <span className="funnel__bar">
                        <i style={{ width: `${Math.max(f.pct, 4)}%` }} />
                    </span>
                    <b>{f.value.toLocaleString('pt-BR')}</b>
                    <small>{f.pct.toLocaleString('pt-BR')}%</small>
                </li>
            ))}
        </ul>
        <div className="screen__foot">
            <span>Receita estimada</span>
            <strong>R$ 31.950</strong>
        </div>
    </div>
);
