import React from 'react';
import {
    ArrowCounterClockwiseIcon,
    CursorIcon,
    DesktopIcon,
    DeviceMobileIcon,
    FilesIcon,
    ImageIcon,
    RowsIcon,
    SquaresFourIcon,
    TextTIcon,
} from '@phosphor-icons/react';

const SECTIONS = ['Cabeçalho', 'Hero', 'Serviços', 'Depoimentos', 'Agendamento', 'Rodapé'] as const;
const SWATCHES = ['#1f3b2d', '#c8a27a', '#f3ede4', '#111111'] as const;

export const SitePreview: React.FC<{ selected?: boolean }> = ({ selected = true }) => (
    <div className="site">
        <div className="site__nav">
            <strong>Aurora</strong>
            <span>Tratamentos</span>
            <span>Equipe</span>
            <span>Contato</span>
            <b>Agendar</b>
        </div>
        <div className={`site__hero${selected ? ' is-selected' : ''}`}>
            {selected && <span className="site__handle">Hero</span>}
            <div className="site__copy">
                <small>Clínica de estética · São Paulo</small>
                <h4>Cuidado que se vê no espelho.</h4>
                <p>Tratamentos faciais e corporais com avaliação gratuita.</p>
                <b>Agendar avaliação</b>
            </div>
            <div className="site__art">
                <span className="site__arch" />
                <span className="site__sun" />
                <span className="site__leaf" />
            </div>
        </div>
        <div className="site__cards">
            <span>Limpeza de pele</span>
            <span>Harmonização</span>
            <span>Drenagem</span>
        </div>
    </div>
);

const StudioEditor: React.FC = () => (
    <div className="editor">
        <div className="editor__top">
            <span className="editor__doc">
                <FilesIcon /> clinicaaurora.com.br <em>/ início</em>
            </span>
            <span className="editor__devices">
                <DesktopIcon className="is-on" />
                <DeviceMobileIcon />
            </span>
            <span className="editor__actions">
                <ArrowCounterClockwiseIcon />
                <b>Publicar</b>
            </span>
        </div>

        <div className="editor__body">
            <aside className="editor__panel">
                <p className="editor__label">Seções</p>
                <ul>
                    {SECTIONS.map((s) => (
                        <li key={s} className={s === 'Hero' ? 'is-active' : ''}>
                            <RowsIcon /> {s}
                        </li>
                    ))}
                </ul>
                <p className="editor__label">Adicionar</p>
                <div className="editor__blocks">
                    <span><TextTIcon /> Texto</span>
                    <span><ImageIcon /> Imagem</span>
                    <span><SquaresFourIcon /> Galeria</span>
                    <span><CursorIcon /> Botão</span>
                </div>
            </aside>

            <div className="editor__canvas">
                <SitePreview />
            </div>

            <aside className="editor__panel editor__panel--right">
                <p className="editor__label">Estilo</p>
                <div className="editor__field">
                    <span>Cores</span>
                    <div className="editor__swatches">
                        {SWATCHES.map((c) => (
                            <i key={c} style={{ background: c }} />
                        ))}
                    </div>
                </div>
                <div className="editor__field">
                    <span>Tipografia</span>
                    <div className="editor__select">Serifada clássica</div>
                </div>
                <div className="editor__field">
                    <span>Botão</span>
                    <div className="editor__select">Agendar avaliação</div>
                </div>
                <div className="editor__field">
                    <span>Link</span>
                    <div className="editor__select">WhatsApp</div>
                </div>
            </aside>
        </div>
    </div>
);

export default StudioEditor;
