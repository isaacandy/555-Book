# **The 555 Onboarding: The Handshake Protocol**

The goal of the onboarding is to turn a transactional link into a social contract.

## **Phase 1: Persona Identification**

Instead of generic settings, users choose a **Lense**.

* **If Couple:** Enable "The Vault" by default and suggest "Spicy" catalog items.  
* **If Roommates:** Focus on "Hard Debt" (Bills) and "Chore" favors.  
* **If Buddies:** Focus on "Face-Saving" and "Designated Hero" logic.

## **Phase 2: The Secure Handshake (Technical Flow)**

To enable the **Private Vault** (E2EE), we use the linking process to exchange public keys without the user knowing they are doing "cryptography."

1. **Initiation:** User A selects "Add a Friend" and chooses a Persona.  
2. **Key Generation:** The app generates a temporary handshake\_id and a public/private key pair on User A's device.  
3. **The Link:** User A sends a 555-branded link via WhatsApp: 555app.com/join?id=XYZ123\&key=PUB\_KEY\_A.  
4. **Acceptance:** User B clicks the link. Their app generates their own key pair.  
5. **Shared Secret:** The apps exchange public keys through the deep link. A "Shared Secret" is calculated on both devices.  
6. **Verification:** Users see a "Matching 555 Stamp" (a 3-digit code or emoji) on both screens to confirm they are linked securely.

## **Phase 3: The Favor Catalog Setup**

Once linked, the app prompts both users: *"What are you willing to do for \[Name\]?"*

* Users pick 3-5 "Standard Favors" from the persona-specific list.  
* This populates the "Settlement" menu immediately, removing the awkward "how can I pay you back?" phase.

## **Phase 4: The First Entry (The Hook)**

The onboarding ends by asking User A: *"Did \[Name\] do anything for you lately?"* \* If they log a favor immediately, User B gets a "Thank You" notification as their first interaction with the app, creating an instant positive feedback loop.