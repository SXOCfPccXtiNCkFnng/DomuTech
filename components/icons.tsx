import React from 'react';
import type { Icon } from '@phosphor-icons/react';
import {
    Code,
    Check,
    Cpu,
    DeviceMobile,
    Palette,
    Megaphone,
    ChartBar,
    ChatCircleDots,
    Users,
    Trophy,
    Clock,
    Target,
    GlobeHemisphereWest,
    Lightbulb,
    ShieldCheck,
    Lightning,
    Phone,
    Star,
    Sun,
    Moon,
    ArrowSquareOut,
    List,
    X,
    CaretDoubleDown,
    CaretDown,
    CaretRight,
    ShoppingBag,
    Layout,
    Sparkle,
} from '@phosphor-icons/react';

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
}

type Weight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

const Brand = ({
    Icon: PhIcon,
    className = 'w-6 h-6',
    style,
    weight = 'duotone',
}: IconProps & { Icon: Icon; weight?: Weight }) => (
    <PhIcon
        className={className}
        style={style}
        weight={weight}
        aria-hidden
    />
);

/** Chevron UI - bold, sem filled “IA” */
export const ArrowRightIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CaretRight className={className} style={style} weight="bold" aria-hidden />
);

export const BrandArrowIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CaretRight className={className} style={style} weight="bold" aria-hidden />
);

export const ArrowUpRightIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CaretRight className={className} style={style} weight="bold" aria-hidden />
);

export const CodeIcon = (p: IconProps) => <Brand Icon={Code} {...p} />;
export const CheckIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Check className={className} style={style} weight="bold" aria-hidden />
);
export const AutomationIcon = (p: IconProps) => <Brand Icon={Cpu} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const MobileIcon = (p: IconProps) => <Brand Icon={DeviceMobile} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const PaletteIcon = (p: IconProps) => <Brand Icon={Palette} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const MarketingIcon = (p: IconProps) => <Brand Icon={Megaphone} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const BIIcon = (p: IconProps) => <Brand Icon={ChartBar} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const TechConsultingIcon = (p: IconProps) => <Brand Icon={ChatCircleDots} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const UserGroupIcon = (p: IconProps) => <Brand Icon={Users} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const TrophyIcon = (p: IconProps) => <Brand Icon={Trophy} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const ClockIcon = (p: IconProps) => <Brand Icon={Clock} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const TargetIcon = (p: IconProps) => <Brand Icon={Target} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const GlobeIcon = (p: IconProps) => <Brand Icon={GlobeHemisphereWest} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const LightbulbIcon = (p: IconProps) => <Brand Icon={Lightbulb} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const ShieldCheckIcon = (p: IconProps) => <Brand Icon={ShieldCheck} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const LightningBoltIcon = (p: IconProps) => <Brand Icon={Lightning} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const PhoneIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <Phone className={className} style={style} weight="duotone" aria-hidden />
);
export const UsersIcon = (p: IconProps) => <Brand Icon={Users} className={p.className ?? 'w-8 h-8'} style={p.style} />;
export const StarIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <Star className={className} style={style} weight="duotone" aria-hidden />
);
export const SunIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <Sun className={className} style={style} weight="regular" aria-hidden />
);
export const MoonIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <Moon className={className} style={style} weight="regular" aria-hidden />
);
export const ExternalLinkIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ArrowSquareOut className={className} style={style} weight="bold" aria-hidden />
);

export const WhatsAppIcon = ({ className = 'w-8 h-8' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.551 4.197 1.597 6.04L0 24l6.101-1.6c1.78.966 3.79 1.477 5.845 1.478h.005c6.635 0 12.032-5.396 12.033-12.034a11.83 11.83 0 00-3.527-8.504z" />
    </svg>
);

export const MenuIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <List className={className} style={style} weight="bold" aria-hidden />
);
export const XIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <X className={className} style={style} weight="bold" aria-hidden />
);
export const ChevronDownDoubleIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <CaretDoubleDown className={className} style={style} weight="bold" aria-hidden />
);
export const ChevronDownIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <CaretDown className={className} style={style} weight="bold" aria-hidden />
);
export const ShoppingBagIcon = (p: IconProps) => <Brand Icon={ShoppingBag} {...p} />;
export const LayoutIcon = (p: IconProps) => <Brand Icon={Layout} {...p} />;
export const ZapIcon = (p: IconProps) => <Brand Icon={Lightning} {...p} />;
export const SparklesIcon = (p: IconProps) => <Brand Icon={Sparkle} {...p} />;
