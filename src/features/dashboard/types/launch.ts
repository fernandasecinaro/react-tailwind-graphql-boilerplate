export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name_long?: string;
  };
  links: {
    mission_patch?: string;
    article_link?: string;
    video_link?: string;
  };
  details?: string;
}
