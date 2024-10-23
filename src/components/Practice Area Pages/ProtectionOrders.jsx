import React from "react";

const ProtectionOrders = () => {
    const reliefProvisions = [
        {
            title: "Stay-Away Provisions",
            description:
                "These provisions require the accused to maintain a specific distance from you, your home, your workplace, and your children's schools."
        },
        {
            title: "Cease-Abuse Provisions",
            description:
                "These require the abuser to stop any abusive or threatening behavior toward you or your children."
        },
        {
            title: "No-Contact Provisions",
            description:
                "These prevent the accused from making any form of contact, including in-person, telephonic, electronic, or through third parties."
        },
        {
            title: "Additional Provisions",
            description:
                "May involve the surrendering of firearms, payment of spousal or child support, or granting you sole possession of shared vehicles or living spaces."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Protection Orders
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Texas Family Law Attorney Advocating for Clients in Need of Protection
                </p>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
                <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Relentless Lawyer Defending Victims in the San Antonio Area. If you
                        fear for your safety due to threats or abuse from someone you know,
                        the Kriebel Law Firm, PLLC is ready to act swiftly to protect you
                        and your children. I assist clients in the San Antonio area and
                        across Texas in securing orders of protection against individuals
                        they currently or formerly lived with who pose a threat.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                        These orders—commonly referred to as “restraining orders,”
                        “injunctions,” or “protection orders”—are crucial for imposing
                        restrictions on alleged abusers, ensuring that they cannot harm you.
                        Regardless of the terminology, these orders are designed to prevent
                        contact from anyone who has threatened your safety. I am committed
                        to doing whatever it takes to safeguard you and your family against
                        domestic violence and intimidation.
                    </p>
                </div>
            </div>

            {/* Aggressive Advocate */}
            <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden p-6 sm:p-8 mb-12">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Aggressive Advocate for Filing Protective Orders
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Orders of protection are vital legal tools for keeping victims safe
                    from their abusers. Recognized across all states, these orders limit
                    the actions of individuals who pose a threat, allowing you to live
                    free from fear. I will guide you through the process of obtaining an
                    order of protection in Texas, ensuring you understand your rights and
                    the legal mechanisms available to you. The relief provided by these
                    orders can include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reliefProvisions.map((provision, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {provision.title}
                            </h3>
                            <p className="text-gray-700">{provision.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Contact a Committed Texas Family Lawyer for Immediate Assistance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    At Kriebel Law Firm, PLLC, I provide prompt and effective legal
                    assistance to clients seeking protection from abuse. If you or your
                    children are in danger, I will work tirelessly to secure an order of
                    protection to ensure your safety.
                </p>
                <div className="space-x-4">
                    <a
                        href="tel:210-677-5586"
                        className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                    >
                        Call 210-677-5586
                    </a>
                    <a
                        href="/contact"
                        className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Contact Online
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProtectionOrders;
