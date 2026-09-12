import React from 'react';
import type { Icon } from '@phosphor-icons/react';
import {
    ArrowRight,
    ArrowSquareOut,
    ArrowUpRight,
    Bag,
    CalendarBlank,
    CaretDown,
    CaretDoubleDown,
    CaretRight,
    ChartBar,
    ChatCircleDots,
    Check,
    CheckCircle,
    Clock,
    Code,
    CodeBlock,
    Compass,
    Cpu,
    DeviceMobile,
    DeviceMobileCamera,
    EnvelopeSimple,
    GlobeHemisphereWest,
    Headset,
    Layout,
    Lightbulb,
    Lightning,
    LinkSimple,
    List,
    MagnifyingGlass,
    Megaphone,
    Moon,
    Palette,
    Phone,
    Plus,
    SealCheck,
    ShieldCheck,
    ShoppingBag,
    SignOut,
    Sparkle,
    SquaresFour,
    Stack,
    Star,
    Storefront,
    Sun,
    Target,
    TreeStructure,
    Trophy,
    Users,
    UsersThree,
    UserCircle,
    X,
    Briefcase,
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
    <PhIcon className={className} style={style} weight={weight} aria-hidden />
);

export const ArrowRightIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CaretRight className={className} style={style} weight="bold" aria-hidden />
);
export const BrandArrowIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CaretRight className={className} style={style} weight="bold" aria-hidden />
);
export const ArrowUpRightIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ArrowUpRight className={className} style={style} weight="bold" aria-hidden />
);
export const ArrowRightSolar = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ArrowRight className={className} style={style} weight="bold" aria-hidden />
);
export const ArrowUpRightSolar = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ArrowUpRight className={className} style={style} weight="bold" aria-hidden />
);

export const CodeIcon = (p: IconProps) => <Brand Icon={Code} {...p} />;
export const CheckIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Check className={className} style={style} weight="bold" aria-hidden />
);
export const AutomationIcon = (p: IconProps) => (
    <Brand Icon={Cpu} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const MobileIcon = (p: IconProps) => (
    <Brand Icon={DeviceMobile} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const PaletteIcon = (p: IconProps) => (
    <Brand Icon={Palette} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const MarketingIcon = (p: IconProps) => (
    <Brand Icon={Megaphone} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const BIIcon = (p: IconProps) => (
    <Brand Icon={ChartBar} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const TechConsultingIcon = (p: IconProps) => (
    <Brand Icon={ChatCircleDots} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const UserGroupIcon = (p: IconProps) => (
    <Brand Icon={Users} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const TrophyIcon = (p: IconProps) => (
    <Brand Icon={Trophy} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const ClockIcon = (p: IconProps) => (
    <Brand Icon={Clock} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const TargetIcon = (p: IconProps) => (
    <Brand Icon={Target} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const GlobeIcon = (p: IconProps) => (
    <Brand Icon={GlobeHemisphereWest} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const LightbulbIcon = (p: IconProps) => (
    <Brand Icon={Lightbulb} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const ShieldCheckIcon = (p: IconProps) => (
    <Brand Icon={ShieldCheck} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const LightningBoltIcon = (p: IconProps) => (
    <Brand Icon={Lightning} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const PhoneIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <Phone className={className} style={style} weight="duotone" aria-hidden />
);
export const UsersIcon = (p: IconProps) => (
    <Brand Icon={Users} className={p.className ?? 'w-8 h-8'} style={p.style} />
);
export const StarIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <Star className={className} style={style} weight="duotone" aria-hidden />
);
export const StarFillIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <Star className={className} style={style} weight="fill" aria-hidden />
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

export const InstagramIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 1 0 12 7.2zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24zm6.288-7.992a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM12 3.36c-2.352 0-2.646.01-3.576.052-.926.042-1.56.19-2.112.404a4.27 4.27 0 0 0-1.546 1.006 4.27 4.27 0 0 0-1.006 1.546c-.214.552-.362 1.186-.404 2.112C3.37 9.354 3.36 9.648 3.36 12s.01 2.646.052 3.576c.042.926.19 1.56.404 2.112a4.27 4.27 0 0 0 1.006 1.546 4.27 4.27 0 0 0 1.546 1.006c.552.214 1.186.362 2.112.404.93.042 1.224.052 3.576.052s2.646-.01 3.576-.052c.926-.042 1.56-.19 2.112-.404a4.27 4.27 0 0 0 1.546-1.006 4.27 4.27 0 0 0 1.006-1.546c.214-.552.362-1.186.404-2.112.042-.93.052-1.224.052-3.576s-.01-2.646-.052-3.576c-.042-.926-.19-1.56-.404-2.112a4.27 4.27 0 0 0-1.006-1.546 4.27 4.27 0 0 0-1.546-1.006c-.552-.214-1.186-.362-2.112-.404C14.646 3.37 14.352 3.36 12 3.36zm0 1.68c2.312 0 2.586.01 3.496.05.844.039 1.302.178 1.607.296.404.157.692.345.995.648.303.303.491.591.648.995.118.305.257.763.296 1.607.04.91.05 1.184.05 3.496s-.01 2.586-.05 3.496c-.039.844-.178 1.302-.296 1.607a2.68 2.68 0 0 1-.648.995 2.68 2.68 0 0 1-.995.648c-.305.118-.763.257-1.607.296-.91.04-1.184.05-3.496.05s-2.586-.01-3.496-.05c-.844-.039-1.302-.178-1.607-.296a2.68 2.68 0 0 1-.995-.648 2.68 2.68 0 0 1-.648-.995c-.118-.305-.257-.763-.296-1.607-.04-.91-.05-1.184-.05-3.496s.01-2.586.05-3.496c.039-.844.178-1.302.296-1.607.157-.404.345-.692.648-.995.303-.303.591-.491.995-.648.305-.118.763-.257 1.607-.296.91-.04 1.184-.05 3.496-.05z" />
    </svg>
);

export const GoogleIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

export const AppleIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.435 2.205-1.2 3.015-.78.825-2.055 1.455-3.195 1.365-.135-1.11.42-2.265 1.17-3.06.795-.855 2.175-1.47 3.225-1.32zM20.655 17.445c-.66 1.515-.975 2.19-1.83 3.54-1.185 1.845-2.85 4.14-4.92 4.155-1.83.03-2.305-1.2-4.8-1.185-2.49.015-3.015 1.215-4.845 1.185-2.07-.03-3.66-2.1-4.845-3.945C-2.55 17.7-.54 10.44 2.655 6.84c1.56-1.755 3.6-2.865 5.655-2.865 2.115 0 3.45 1.17 5.205 1.17 1.695 0 2.73-1.17 5.205-1.17 1.845 0 3.69.99 5.04 2.7-4.425 2.43-3.705 8.745.895 10.77z" />
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
export const AltArrowDownIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <CaretDown className={className} style={style} weight="bold" aria-hidden />
);
export const ShoppingBagIcon = (p: IconProps) => <Brand Icon={ShoppingBag} {...p} />;
export const LayoutIcon = (p: IconProps) => <Brand Icon={Layout} {...p} />;
export const ZapIcon = (p: IconProps) => <Brand Icon={Lightning} {...p} />;
export const SparklesIcon = (p: IconProps) => <Brand Icon={Sparkle} {...p} />;
export const UserCircleIcon = ({ className = 'w-6 h-6', style }: IconProps) => (
    <UserCircle className={className} style={style} weight="regular" aria-hidden />
);
export const EnvelopeIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <EnvelopeSimple className={className} style={style} weight="bold" aria-hidden />
);
export const LinkIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <LinkSimple className={className} style={style} weight="bold" aria-hidden />
);

/** Pilares */
export const MonitorIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Compass className={className} style={style} weight="duotone" aria-hidden />
);
export const SettingsIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <TreeStructure className={className} style={style} weight="duotone" aria-hidden />
);
export const BoltIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Lightning className={className} style={style} weight="duotone" aria-hidden />
);

export const Widget4Icon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <SquaresFour className={className} style={style} weight="duotone" aria-hidden />
);
export const GlobalIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <GlobeHemisphereWest className={className} style={style} weight="duotone" aria-hidden />
);
export const CodeSolar = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Code className={className} style={style} weight="duotone" aria-hidden />
);
export const PaletteSolar = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Palette className={className} style={style} weight="duotone" aria-hidden />
);
export const CheckCircleIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CheckCircle className={className} style={style} weight="duotone" aria-hidden />
);
export const ClockCircleIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Clock className={className} style={style} weight="duotone" aria-hidden />
);
export const ShopIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Storefront className={className} style={style} weight="duotone" aria-hidden />
);
export const LogoutIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <SignOut className={className} style={style} weight="bold" aria-hidden />
);
export const AddIcon = ({ className = 'w-4 h-4', style }: IconProps) => (
    <Plus className={className} style={style} weight="bold" aria-hidden />
);
export const MagnifierIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <MagnifyingGlass className={className} style={style} weight="duotone" aria-hidden />
);
export const CodeSquareIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CodeBlock className={className} style={style} weight="duotone" aria-hidden />
);
export const ShieldCheckSolar = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ShieldCheck className={className} style={style} weight="duotone" aria-hidden />
);
export const SmartphoneIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <DeviceMobileCamera className={className} style={style} weight="duotone" aria-hidden />
);
export const CaseIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Briefcase className={className} style={style} weight="duotone" aria-hidden />
);
export const CalendarMinimalisticIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <CalendarBlank className={className} style={style} weight="duotone" aria-hidden />
);
export const GraphUpIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <ChartBar className={className} style={style} weight="duotone" aria-hidden />
);
export const UsersGroupRoundedIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <UsersThree className={className} style={style} weight="duotone" aria-hidden />
);
export const VerifiedCheckIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <SealCheck className={className} style={style} weight="duotone" aria-hidden />
);
export const HeadphonesRoundIcon = ({ className = 'w-5 h-5', style }: IconProps) => (
    <Headset className={className} style={style} weight="duotone" aria-hidden />
);

export { Stack, Bag };
