const configuredPhone = process.env.NEXT_PUBLIC_PHONE?.trim();

export const publicPhone = configuredPhone || "";

const smsPhone = publicPhone.replace(/\D/g, "");

export const textMessages = {
  headerBanner:
    "Hi! I saw your website banner and I’d like help choosing the right puppy.",
  headerPrimary:
    "Hi! I’m interested in getting a puppy. Can you guide me through available options?",
  heroPrimary:
    "Hi! I’m ready to find a puppy today. Can you share available puppies and next steps?",
  footerSupport:
    "Hi! I need guidance picking the best puppy for my family.",
  floatingGeneral:
    "Hi! I’m browsing your site and would like to chat about available puppies.",
  floatingBreedRequest:
    "Hi! I want to tell you exactly the type of dog I want:",
} as const;

export const createTextMessageUrl = (message: string) => {
  return `sms:${smsPhone ? `+${smsPhone}` : ""}?body=${encodeURIComponent(message)}`;
};
