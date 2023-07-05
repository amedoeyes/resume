import { Link, Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";
import { IHeader } from "../../types";
import styles from "./styles";

export default function Header({
	firstName,
	lastName,
	email,
	phone,
	links,
}: IHeader) {
	return (
		<View style={styles.header}>
			<Text style={styles.name}>
				{firstName} {lastName}
			</Text>

			<View style={[styles.contacts, styles.fs2]}>
				<Link src={`mailto:${email}`} style={styles.link}>
					{email}
				</Link>

				<Text>-</Text>

				<Link src={`tel:${phone}`} style={styles.link}>
					{phone}
				</Link>

				<Text>-</Text>

				{links &&
					links.map((link, index) => (
						<Fragment key={link}>
							<Link src={link} style={styles.link}>
								{link.replace("https://", "")}
							</Link>

							{index === links.length - 1 ? null : <Text>-</Text>}
						</Fragment>
					))}
			</View>
		</View>
	);
}
