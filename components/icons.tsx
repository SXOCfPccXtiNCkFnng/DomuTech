import React from 'react';
import { 
    Code, 
    Check, 
    ArrowRight, 
    ArrowUpRight, 
    Cpu, 
    Smartphone, 
    Palette, 
    Megaphone, 
    BarChart3, 
    MessageSquare, 
    Users, 
    Trophy, 
    Clock, 
    Target, 
    Globe, 
    Lightbulb, 
    ShieldCheck, 
    Zap, 
    Phone, 
    Star, 
    Sun, 
    Moon, 
    ExternalLink, 
    Menu, 
    X, 
    ChevronsDown, 
    ChevronDown, 
    ShoppingBag, 
    Layout, 
    Sparkles 
} from 'lucide-react';

interface IconProps {
    className?: string;
    style?: React.CSSProperties;
}

export const CodeIcon = ({ className = "w-6 h-6", style }: IconProps) => (
    <Code className={className} style={style} />
);

export const CheckIcon = ({ className = "w-5 h-5" }: IconProps) => (
    <Check className={className} />
);

export const ArrowRightIcon = ({ className = "w-5 h-5" }: IconProps) => (
    <ArrowRight className={className} />
);

export const BrandArrowIcon = ({ className = "w-5 h-5" }: IconProps) => (
    <ArrowRight className={className} />
);

export const ArrowUpRightIcon = ({ className = "w-5 h-5" }: IconProps) => (
    <ArrowUpRight className={className} />
);

export const AutomationIcon = ({ className = "w-8 h-8", style }: IconProps) => (
    <Cpu className={className} style={style} />
);

export const MobileIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Smartphone className={className} />
);

export const PaletteIcon = ({ className = "w-8 h-8", style }: IconProps) => (
    <Palette className={className} style={style} />
);

export const MarketingIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Megaphone className={className} />
);

export const BIIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <BarChart3 className={className} />
);

export const TechConsultingIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <MessageSquare className={className} />
);

export const UserGroupIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Users className={className} />
);

export const TrophyIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Trophy className={className} />
);

export const ClockIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Clock className={className} />
);

export const TargetIcon = ({ className = "w-8 h-8", style }: IconProps) => (
    <Target className={className} style={style} />
);

export const GlobeIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Globe className={className} />
);

export const LightbulbIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Lightbulb className={className} />
);

export const ShieldCheckIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <ShieldCheck className={className} />
);

export const LightningBoltIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Zap className={className} />
);

export const PhoneIcon = ({ className = "w-4 h-4" }: IconProps) => (
    <Phone className={className} />
);

export const UsersIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <Users className={className} />
);

export const StarIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Star className={className} />
);

export const SunIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Sun className={className} />
);

export const MoonIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Moon className={className} />
);

export const ExternalLinkIcon = ({ className = "w-5 h-5" }: IconProps) => (
    <ExternalLink className={className} />
);

// Keep the official custom SVG for WhatsApp logo
export const WhatsAppIcon = ({ className = "w-8 h-8" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.551 4.197 1.597 6.04L0 24l6.101-1.6c1.78.966 3.79 1.477 5.845 1.478h.005c6.635 0 12.032-5.396 12.033-12.034a11.83 11.83 0 00-3.527-8.504z" />
    </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Menu className={className} />
);

export const XIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <X className={className} />
);

export const ChevronDownDoubleIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <ChevronsDown className={className} />
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }: IconProps) => (
    <ChevronDown className={className} />
);

export const ShoppingBagIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <ShoppingBag className={className} />
);

export const LayoutIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Layout className={className} />
);

export const ZapIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Zap className={className} />
);

export const SparklesIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Sparkles className={className} />
);