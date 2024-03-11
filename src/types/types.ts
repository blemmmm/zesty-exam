export interface ISliderContent {
  lang_id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  position: string;
  sort_order: string;
  case_study: string;
  alignment: string;
  meta_keywords: null;
  meta_description: "";
  meta_title: string;
  uri: string;
}

export interface IProductSectionContent {
  lang_id: string;
  title: string;
  sub_parent: string;
  sort_order: string;
  layout: string;
  media_content: string;
  rich_media: null;
  text_content: string;
  meta_keywords: null;
  meta_description: string;
  meta_title: string;
  uri: null;
}

export interface IAboutContent {
  lang_id: string;
  title: string;
  hero_content: string;
  page_content: string;
  hero_image: string;
  section_image: string;
  team_members: Array<string>;
  team_photos: Array<string>;
  team_eyebrow: string;
  header_subtitle: null;
  header_description: string;
  team_title: string;
  story_logos: Array<string>;
  stats: Array<string>;
  white_story_logos: Array<string>;
  board_members: Array<string>;
  board_members_title: string;
  board_members_description: string;
  board_member_logos: Array<string>;
  board_member_logos_white: Array<string>;
  meta_keywords: null;
  meta_description: string;
  meta_title: string;
  uri: string;
}
